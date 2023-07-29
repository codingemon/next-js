import { connectDB } from "@/util/database";

export default async function Home() {
  // const client = await connectDB;
  let db = (await connectDB).db("forum"); // 축약
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return <main>{result[0].title}</main>;
}
