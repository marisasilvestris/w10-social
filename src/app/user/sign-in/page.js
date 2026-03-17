"use client";
import { SignIn, SignUpButton } from "@clerk/react";

export default function Page() {
  return (
    <>
      <div className="w-full flex flex-col">
        <SignIn
          appearance={{
            elements: {
              rootBox: "place-self-center",
              cardBox: "shadow-none border-1 border-secondary",
              card: "bg-primary border-1 border-secondary",
              formButtonPrimary:
                "border-0 outline-0 rounded-6 hover:bg-primary hover:text-secondary text-sm",
              footer: "bg-none bg-secondary text-green-300",
              footerActionText: "text-primary font-bold",
              footerActionLink: "text-primary font-bold",
            },
          }}
        />
      </div>
    </>
  );
}
