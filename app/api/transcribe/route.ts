import { NextRequest } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";
import { decode } from "html-entities";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { youtubeUrl } = body;

    const response = await axios.get(youtubeUrl);
    const videoTitle = extractTitle(response.data);
    const transcriptUrl = extractTimedText(response.data);
    const transcript = await getTranscript(transcriptUrl || "");

    return new Response(JSON.stringify({ transcript, videoTitle }), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
}

const extractTitle = (htmlString: string) => {
  const $ = cheerio.load(htmlString);
  const videoTitle = $('meta[name="title"]').attr("content");
  return videoTitle || "No Video Title Found";
};

const extractTimedText = (htmlString: string): string | null => {
  const $ = cheerio.load(htmlString);

  // Find the script tag containing ytInitialPlayerResponse
  const scriptContainingJSON = $(
    'script:contains("ytInitialPlayerResponse")'
  ).html();

  if (scriptContainingJSON) {
    // Extract JSON object from the script content
    const startIndex = scriptContainingJSON.indexOf("{");
    const endIndex = scriptContainingJSON.lastIndexOf("}") + 1;
    const jsonString = scriptContainingJSON.substring(startIndex, endIndex);

    // Parse JSON string to get captionTracks
    const ytInitialPlayerResponse = JSON.parse(jsonString);
    const captionTracks =
      ytInitialPlayerResponse?.captions?.playerCaptionsTracklistRenderer
        ?.captionTracks;

    if (captionTracks && captionTracks.length > 0) {
      const firstCaptionTrack = captionTracks[0];
      const baseUrl = firstCaptionTrack?.baseUrl || "";

      return baseUrl;
    }
  }

  return null;
};

const getTranscript = async (transcriptUrl: string) => {
  const { data } = await axios.get(transcriptUrl);
  const transcript = extractTextFromXML(data);
  return transcript;
};

const extractTextFromXML = (xmlString: string) => {
  const timeStampTextRegex = /<text[^>]*>(.*?)<\/text>/g;
  const timeStampTextMatches = xmlString.match(timeStampTextRegex);

  if (!timeStampTextMatches) {
    return "";
  }

  const transcript = timeStampTextMatches
    .map((match) => match.replace(/<[^>]*>/g, "").replaceAll("&amp;", "&"))
    .join(" ");

  return decode(transcript);
};
