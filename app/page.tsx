import { Navbar } from "@/components/shared/homepage/navbar";
import { Button } from "@/components/ui/button";
import { verifySession } from "@/lib/session";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { isAuth } = await verifySession();

  return (
    <main className="relative container py-4 mx-auto flex flex-col items-center justify-center">
      <Navbar isLogin={isAuth} />
      <section className="w-full min-h-screen flex flex-col gap-6 md:gap-8 items-center text-center py-40">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-sky-400">
          GeekStories
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-4xl">
          Modern publishing tool <br />
          <span className="text-base md:text-xl lg:text-2xl font-semibold">
            for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-sky-400">
              Create
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-sky-400">
              Tell Stories
            </span>
            .
          </span>
        </h2>
        {isAuth ? (
          <Button asChild>
            <Link href="/dashboard" className="flex gap-2">
              <span>Go to Dashboard</span>
              <ArrowRight size={20} />
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/signUp" className="flex gap-2">
              <span>Sign up for free</span>
              <ArrowRight size={20} />
            </Link>
          </Button>
        )}
      </section>
      <span className="fixed -top-60 right-0 w-40 h-[40vh] md:w-[50vw] md:h-[50vh] bg-indigo-800 blur-3xl -z-50 opacity-50"></span>
      <span className="fixed -top-60 left-0 w-40 h-[40vh] md:w-[50vw] md:h-[50vh] bg-sky-400   blur-3xl -z-50 opacity-50"></span>
    </main>
  );
}
