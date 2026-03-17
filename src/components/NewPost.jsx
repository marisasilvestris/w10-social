import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/connection";
import { getCurrentUser } from "@/utils/getCurrentUser";

export default async function NewPost({ parent }) {
  const user = await getCurrentUser();

  console.log(user.id);
  async function submitPost(formData) {
    "use server";

    // const { title, image, content } = Object.fromEntries(formData);
    // const newPost = await db.query(
    //   `insert into socialposts (title, content, clerk_id, media, created_at) values ($1, $2, $3, $4, now()) returning id`,
    //   [title, content, user, image],
    // );
    const { title, content } = Object.fromEntries(formData);

    if (!parent) {
      const newPost = await db.query(
        `insert into socialposts (content, clerk_id, created_at) values ($1, $2, now()) returning id`,
        [content, user.id],
      );
    } else {
      const newPost = await db.query(
        `insert into socialposts (content, clerk_id, parent, created_at) values ($1, $2, $3, now()) returning id`,
        [content, user.id, parent],
      );
    }

    revalidatePath(`/posts`);
    redirect(`/posts`);
  }

  return (
    <form
      action={submitPost}
      className="newPostForm flex flex-col p-2 gap-2 w-full bg-midtone text-secondary"
    >
      <div className="newPostAuthor flex flex-row gap-2 justify-between">
        <label htmlFor="clerk_id" className="place-self-center w-20">
          <span className="text-contrast">*</span> name
        </label>
        <input
          type="text"
          name=""
          value={!user.firstName ? user.username : user.firstName}
          readOnly
          className="w-full p-1"
          hidden
        />
        <input
          type="text"
          name=""
          defaultValue={!user.firstName ? user.username : user.firstName}
          className="w-full p-1"
        />
        <button className="newPostButton place-self-end w-fit p-2 bg-accent text-primary hover:bg-primary hover:text-secondary dark:hover:text-secondary active:bg-contrast">
          poast
        </button>
      </div>
      {/* <div className="newPostImage flex flex-row gap-4 justify-between">
        <ImageUpload />
      </div> */}
      <div className="newPostContent flex flex-row">
        <label htmlFor="content" className="py-1 shrink-0" hidden>
          <span className="text-contrast">*</span> spill ur heart out
        </label>
        <textarea
          name="content"
          placeholder={`text content here`}
          className="field-sizing-content min-h-16 p-2 w-full focus:border focus:border-accent"
          required
        />
      </div>
    </form>
  );
}
