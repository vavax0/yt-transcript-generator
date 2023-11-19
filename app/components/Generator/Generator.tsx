"use client";

import React, { useMemo } from "react";
import Loading from "@/components/Loading";
import useGetTranscriptData from "./hooks/useGetTranscriptData";

const Generator: React.FC = () => {
  const {
    hasError,
    isLoading,
    transcriptData,
    setTranscriptData,
    youtubeUrl,
    setYoutubeUrl,
    onGenerateTranscript,
  } = useGetTranscriptData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onCloseTranscript = () => {
    setTranscriptData(undefined);
  };

  const paragraphs = useMemo(() => {
    return transcriptData?.transcript.split("###");
  }, [transcriptData?.transcript]);

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
            className="px-6 py-3 text-black font-medium rounded-md bg-white hover:bg-slate-200 transition ease-in-out disabled:bg-zinc-300"
            type="submit"
            onClick={onGenerateTranscript}
          >
            Get Transcript Now 🚀
          </button>
        </form>
      )}
      {transcriptData?.summary && (
        <>
          <h2>Summary</h2>
          <p>{transcriptData?.summary}</p>
        </>
      )}
      {!!paragraphs && (
        <>
          <div className="relative p-6 rounded-md border border-white border-opacity-50">
            {!!transcriptData?.title && (
              <h2 className="mb-6">{transcriptData.title}</h2>
            )}
            <button
              onClick={onCloseTranscript}
              className="absolute -right-4 -top-4 bg-white rounded-full w-8 h-8 text-black"
            >
              X
            </button>
            {paragraphs.map((paragraph, index) => (
              <p className="mb-5" key={index}>
                {paragraph}
              </p>
            ))}
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
