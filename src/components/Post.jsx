import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { db } from "@/utils/connection";
import NewPost from "./NewPost";
import { Show } from "@clerk/nextjs";

export default async function Post({ post }) {
  async function deletePost() {
    "use server";

    const deleteQuery = await db.query(
      `delete from socialposts where id = $1`,
      [post.id],
    );

    revalidatePath(`/posts`);
    redirect(`/posts`);
  }
  // console.log(post.id);

  return (
    <li key={`${post.id}`} className="post flex flex-col gap-4 w-full">
      <div className="postBody">
        <Link
          href={`/posts/${post.clerk_id}`}
          className="postAuthor text-accent mx-4"
        >{`${post.author}`}</Link>
        <Link
          href={`/posts/${post.id}`}
          className="postTop flex flex-col gap-4 hover:text-accent"
        >
          <div className="postContent whitespace-pre-wrap m-4 text-xl">{`${post.content}`}</div>
        </Link>
        <div className="postBottom flex flex-row gap-4">
          <span className="postTime text-accent text-sm content-center">{`${post.created_at.toLocaleDateString()} ${post.created_at.toLocaleTimeString()}`}</span>
          <form action={deletePost}>
            <button
              type="submit"
              className="postDelete text-xs dark:text-secondary p-0 m-0"
            >
              regrets?
            </button>
          </form>
        </div>
      </div>
    </li>
  );
}
