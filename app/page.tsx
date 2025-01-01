import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-3 shadow-xl md:rounded-lg border">
      <h1 className="text-2xl lg:text-4xl font-bold text-primary tracking-wider uppercase text-center py-2">
        Welcome to Quizzy
      </h1>
      <span className="min-w-full flex items-cneter justify-center text-sm">Made for Manoj by ManfromExistence</span>
      {/* <Separator /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:px-6 py-3 gap-4">
        <div className="relative h-full">
          <Image
            src={"/hero.webp"}
            alt="hero-image"
            priority
            width={450}
            height={450}
            className="object-cover object-center mx-auto"
          />
        </div>
        <QuizSettings />
      </div>
    </div>
  );
}
