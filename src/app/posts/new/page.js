import NewPost from "@/components/NewPost";
import { getUser } from "@/utils/getCurrentUser";
import { useAuth } from "@clerk/nextjs";

export default function Page({ params }) {
  return (
    <>
      <h2 className="place-self-center text-3xl">new post!</h2>

      <NewPost />
    </>
  );
}
