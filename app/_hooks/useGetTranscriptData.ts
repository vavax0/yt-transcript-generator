import { useCallback, FormEvent, useState } from "react";
import axios from "axios";
import { transcriptEndpoint } from "../_helpers/endpoints";

const useGetTranscriptData = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [transcriptData, setTranscriptData] = useState<{
    title?: string;
    summary?: string;
    transcript: string;
  }>();

  const onGenerateTranscript = useCallback(
    async (event: FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsLoading(true);
      await axios
        .post(transcriptEndpoint, {
          youtubeUrl,
        })
        .then((response) => {
          const data = response.data;
          setTranscriptData({
            transcript: data.transcript,
            summary: data.summary,
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

  return {
    hasError,
    isLoading,
    transcriptData,
    setTranscriptData,
    youtubeUrl,
    setYoutubeUrl,
    onGenerateTranscript,
  };
};

export default useGetTranscriptData;
