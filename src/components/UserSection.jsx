import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function UserSection() {
  return (
    <>
      <div className="flex flex-row gap-4 w-full place-self-center place-content-around md:place-content-between">
        <Show when="signed-out">
          <SignInButton>
            <button className="px-4 py-2 text-nowrap w-fit hover:bg-secondary hover:text-primary active:bg-contrast active:text-primary">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 text-nowrap w-fit hover:bg-secondary hover:text-primary active:bg-contrast active:text-primary">
              Sign up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton
            appearance={{
              elements: {
                rootBox: "w-full p-2",
                userButtonTrigger: "w-full",
                card: "rounded-none",
                formButtonPrimary:
                  "border-0 outline-0 rounded-none hover:bg-primary hover:text-secondary text-sm",
              },
            }}
            showName
          ></UserButton>
        </Show>
      </div>
    </>
  );
}
