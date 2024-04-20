"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookType } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export function Navbar({ isLogin }: { isLogin: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 p-4 md:px-0 w-full md:max-w-2xl z-50">
      <nav className="flex justify-between items-center bg-white/50 backdrop-blur-xl border border-white shadow py-2 px-4 rounded-xl">
        <Link
          href="/"
          className="font-medium flex gap-2 tracking-wider items-center"
        >
          <BookType size={25} strokeWidth={1} />
          GeekStories
        </Link>
        <div className="hidden md:block">
          {isLogin ? (
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <ul className="flex gap-2 tracking-wider items-center">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/login" className="flex gap-2">
                    <span>Log in</span>
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild>
                  <Link href="/signUp" className="flex gap-2">
                    <span>Sign up</span>
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </li>
            </ul>
          )}
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      </nav>
      {isMenuOpen && (
        <nav className="md:hidden py-1">
          <ul className="flex flex-col gap-2 justify-between items-center bg-white/50 backdrop-blur-xl border border-white shadow p-4 rounded-xl">
            {isLogin ? (
              <li>
                <Button className="gap-2" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </li>
            ) : (
              <>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Log in</Link>
                  </Button>
                </li>
                <li>
                  <Button className="gap-2" asChild>
                    <Link href="/signup">
                      Sign up for free <ArrowRight size={20} />
                    </Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
