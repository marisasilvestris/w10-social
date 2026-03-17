import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row gap-4 w-full place-self-center place-content-around md:place-content-between font-medium">
        <Link
          href="/posts"
          className="px-4 py-2 text-nowrap w-fit hover:bg-secondary hover:text-primary active:bg-contrast active:text-primary"
        >
          All posts
        </Link>
        <Link
          href="/posts/new"
          className="px-4 py-2 text-nowrap w-fit hover:bg-secondary hover:text-primary active:bg-contrast active:text-primary"
        >
          New post
        </Link>
      </nav>
    </>
  );
}
