import { db } from "./connection";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
  const user = await currentUser();
  // if there is no userId, we'll the ask the user to sign in (as they're not logged in via clerk)
  if (!user) {
    redirect(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
  }

  const { id, firstName, lastName, username } = user;
  // check database to see if it has that user in it
  const userDetails = (
    await db.query(`select * from socialusers where clerk_id = $1`, [id])
  ).rows;

  // if nothing came back for that user
  // if (userDetails.length === 0) (await authedUser).redirectToSignIn();

  return { id, firstName, lastName, username };
}
