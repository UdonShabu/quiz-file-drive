"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useOrganization,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const { organization } = useOrganization();
  // TODO: We want to query faster and have their own files for each organization
  // There're 4 locations to fix
  const files = useQuery(
    api.files.getFiles
    // FIXME:
  );
  const createFile = useMutation(api.files.createFile);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>

      {files?.map((file) => (
        <div key={file._id}>{file.name} </div>
      ))}

      <Button
        onClick={() => {
          // FIXME:
          createFile({ name: "Hello", orgId: organization.id });
        }}
      >
        Create
      </Button>
    </main>
  );
}
