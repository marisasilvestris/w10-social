import { db } from "@/utils/connection";

export default async function Page({ params }) {
  const { id } = await params;

  const userDetails = await db.query(`select from socialusers where id = $1`, [
    id,
  ]);

  return (
    <>
      <div></div>
    </>
  );
}
