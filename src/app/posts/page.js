import NewPost from "@/components/NewPost";
import Post from "@/components/Post";
import { db } from "@/utils/connection";
import { Show } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export default async function Page({ searchParams }) {
  const posts = (
    await db.query(
      `select * from socialposts where parent is null order by created_at desc`,
    )
  ).rows;

  const params = await searchParams;
  if (params.sort === "asc") {
    posts.reverse();
  }

  return (
    <>
      <div className="sortBy flex flex-row place-self-center p-2">
        <Link
          href="/posts"
          className={`p-2 hover:bg-accent hover:text-primary ${!params.sort ? "text-contrast font-medium" : null}`}
        >
          new
        </Link>
        <Link
          href="/posts?sort=asc"
          className={`p-2 hover:bg-accent hover:text-primary ${params.sort === "asc" ? "text-contrast font-medium" : null}`}
        >
          old
        </Link>
      </div>
      <ul className="postsList w-full flex flex-col gap-16">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div key={post.id}>
                <Post post={post} />
                <Show when="signed-in">
                  <div className="mx-10">
                    <NewPost parent={post.id} />
                  </div>
                </Show>
              </div>
            );
          })
        ) : (
          <p className="px-4 p-2 bg-contrast text-primary dark:text-secondary w-fit">
            no posts found!
          </p>
        )}
      </ul>
    </>
  );
}
