import Link from "next/link";

export default async function SubPost({ post }) {
  return (
    <li key={`${post.id}`} className="post flex flex-col gap-4 w-full">
      <div className="postBody">
        <Link
          href={`/posts/${post.userid}`}
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
        </div>
      </div>
    </li>
  );
}
