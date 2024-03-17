"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* TODO: I want custom button to show dynamically based on signed in/out */}
      <SignInButton mode="modal" />
    </main>
  );
}
