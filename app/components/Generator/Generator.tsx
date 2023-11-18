"use client";

import React, { useState, FormEvent, useCallback } from "react";
import Loading from "@/components/Loading";
import axios from "axios";

const Generator: React.FC<{}> = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [transcriptData, setTranscriptData] = useState<{
    title: string;
    transcript: string;
  }>();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onCloseTranscript = () => {
    setTranscriptData(undefined);
  };

  const onGenerateTranscript = useCallback(
    async (event: FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsLoading(true);
      await axios
        .post("/api/transcribe", {
          youtubeUrl,
        })
        .then((response) => {
          const data = response.data;
          setTranscriptData({
            transcript: data.transcript,
            title: data.videoTitle,
          });
          setYoutubeUrl(undefined);
          setHasError(false);
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [youtubeUrl]
  );

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <form className="flex flex-col gap-4 w-3/6 items-center">
          <p className="font-bold">Enter URL To Generate The Transcript</p>
          <input
            className="rounded-md px-6 py-3 w-full bg-transparent border border-white border-opacity-50"
            id="videoUrl"
            type="text"
            aria-label="Youtube Video URL"
            placeholder="Youtube Video URL"
            onChange={(e) => setYoutubeUrl(e.target.value)}
            value={youtubeUrl}
          />
          {hasError && <p className="text-red-500">Youtube URL is invalid</p>}
          <button
            className="px-6 py-3 text-black font-medium rounded-md bg-white hover:bg-slate-200 transition ease-in-out"
            type="submit"
            onClick={onGenerateTranscript}
          >
            Get Transcript Now 🚀
          </button>
        </form>
      )}
      {!!transcriptData?.transcript && (
        <>
          <div className="relative p-6 rounded-md border border-white border-opacity-50">
            {!!transcriptData.title && (
              <h2 className="mb-6">{transcriptData.title}</h2>
            )}
            <button
              onClick={onCloseTranscript}
              className="absolute -right-4 -top-4 bg-white rounded-full w-8 h-8 text-black"
            >
              X
            </button>
            <p>{transcriptData?.transcript}</p>
          </div>
          <button
            className="py-2 px-4 rounded-sm bg-zinc-900 transition ease-in-out"
            onClick={scrollToTop}
          >
            Go to Top
          </button>
        </>
      )}
    </div>
  );
};

export default Generator;
