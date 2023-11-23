import Card from "@/app/_components/Card";
import Generator from "./_components/Generator";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youtube Video Transcript Generator",
  description:
    "Our tool generates precise transcript within seconds. Trust the YouTube Transcript Generator to deliver dependable text that faithfully mirrors your video content.",
};

export default function Home() {
  return (
    <main className="flex flex-col flex-auto py-16 px-24 gap-10 items-center justify-center ">
      <div className="max-w-4xl flex flex-col items-center gap-10 ">
        <h1 className="text-center">
          Get YouTube Video Transcript in Seconds for Free 🎉
        </h1>
        <p className="text-center max-w-2xl">
          Easily turn any Youtube video into text with our simple transcript
          generator.
        </p>
        <Generator />
      </div>
      <div className="flex gap-10">
        <Card
          title="Instant and Accurate"
          content="Our tool generates precise transcript within seconds. Trust the YouTube Transcript Generator to deliver dependable text that faithfully mirrors your video content."
        />
        <Card
          title="Free to Use"
          content="We're all about levelling the playing field for creators. Our YouTube Transcript Generator comes at zero cost—no hidden charges or subscriptions. Get unlimited transcriptions without spending a cent."
        />
        <Card
          title="Convert Any YouTube Video"
          content="Our YouTube Transcript Generator is compatible with all YouTube videos, transcribing content in any language or topic for your convenience."
        />
      </div>
    </main>
  );
}
