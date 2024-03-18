"use client";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="border-b py-4 bg-slate-50">
      <div className="container mx-auto flex justify-between items-center">
        FileDrive
        <div className="flex gap-4 items-center">
          {/* Don't forget to enable organization in clerk */}
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
}
