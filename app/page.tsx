import Card from "@/components/Card";
import Generator from "./components/Generator/Generator";

export default function Home() {
  return (
    <main className="flex flex-col flex-auto py-16 px-24 gap-10 items-center justify-center ">
      <div className="max-w-4xl flex flex-col items-center gap-10 ">
        <h1 className="text-center">Get Any YouTube Transcript for Free 🎉</h1>
        <p className="text-center max-w-2xl">
          Easily turn any Youtube video into text with our simple transcript
          generator.
        </p>
        <Generator />
      </div>
      <div className="flex gap-10">
        <Card
          title="Speedy Transcripts"
          content="Our clever tool swiftly generates accurate transcripts in seconds. Depend on the Youtube Transcript Generator for trustworthy text that truly reflects your video."
        />
        <Card
          title="Free to Use"
          content="We're all about leveling the playing field for creators. Our YouTube Transcript Generator comes at zero cost—no hidden charges or subscriptions. Get unlimited transcriptions without spending a cent."
        />
      </div>
    </main>
  );
}
