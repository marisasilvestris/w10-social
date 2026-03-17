// import Comments from "@/components/Comments";
// import NewComment from "@/components/NewComment";
import SubPost from "@/components/SubPost";
import Post from "@/components/Post";
import { db } from "@/utils/connection";
import Image from "next/image";
import Link from "next/link";
import pg from "pg";
import { Show } from "@clerk/nextjs";
import NewPost from "@/components/NewPost";

export default async function Page({ params }) {
  const { id } = await params;

  const currentPost = (
    await db.query(`select * from socialposts where id = $1`, [id])
  ).rows[0];
  const subPosts = (
    await db.query(
      `select * from socialposts where parent = $1 order by created_at desc`,
      [id],
    )
  ).rows;
  // console.log(subPosts);

  return (
    <>
      <ul className="w-full gap-4 flex flex-col">
        {currentPost ? (
          <>
            {console.log(subPosts)}
            <Post post={currentPost} />

            <Show when="signed-in">
              <NewPost parent={currentPost.id} />
            </Show>
            <ul className="postsList w-full flex flex-col gap-16">
              {subPosts != null && subPosts.length > 0 ? (
                subPosts.map((post) => {
                  console.log(post);

                  return <SubPost key={post.id} post={post} />;
                })
              ) : (
                <p className="px-4 p-2 bg-contrast text-primary dark:text-secondary w-fit">
                  no posts found!
                </p>
              )}
            </ul>
          </>
        ) : (
          "no post found!!"
        )}
      </ul>
    </>
  );
}
