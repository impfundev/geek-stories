import { Navbar } from "@/components/shared/homepage/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative container py-4 mx-auto flex flex-col items-center justify-center">
      <Navbar />
      <section className="w-full min-h-screen flex flex-col gap-6 md:gap-8 items-center text-center py-40">
        <h1 className="font-extrabold text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
          GeekStories
        </h1>
        <h2 className="text-base md:text-2xl">
          Modern publishing tool <br />
          <span className="text-secondary font-semibold">
            for create and tell stories.
          </span>
        </h2>
        <Image
          className="lg:max-w-4xl rounded-lg drop-shadow-sm"
          src="/dashboard.png"
          width={1920}
          height={1080}
          alt="dashboard"
        />
        <Button className="gap-2">
          Sign up for free <ArrowRight size={20} />
        </Button>
      </section>
      <span className="absolute top-0 right-0 w-40 h-[40vh] md:w-[50vw] md:h-[50vh] bg-primary blur-3xl -z-50 opacity-20"></span>
      <span className="absolute top-10 left-0 w-40 h-[40vh] md:w-[50vw] md:h-[50vh] bg-secondary blur-3xl -z-50 opacity-20"></span>
    </main>
  );
}
