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
          title="Fast and Accurate"
          content="Transcripts: Experience the power of technology as our advanced AI algorithms generate precise and reliable transcripts in mere seconds. Trust Kome to deliver text that reflects the content of your videos with remarkable accuracy."
        />
        <Card
          title="Free of Charge"
          content="We believe in democratizing accessibility to essential tools for content creators. Our YouTube Transcript Generator is entirely free to use, with no hidden costs or subscriptions required. Enjoy unlimited access to our transcription services without breaking the bank."
        />
        <Card
          title="Multilanguage Support"
          content="Kome's YouTube Transcript Generator supports over 120 languages, including English, Spanish, French, German, Italian, Japanese, Korean, Chinese, and more. We are continually expanding our language support to ensure that our users can access our services in their native tongue."
        />
      </div>
    </main>
  );
}
