import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <Link prefetch={false} href={"/detail/" + result[i]._id}>
            <div className="list-item">
              <h4>{result[i].title}</h4>
              <p>1월 1일</p>
              <Link href={"/edit/" + result[i]._id}>✏️수정</Link>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
