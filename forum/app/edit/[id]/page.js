import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // db에 하나의 글 수정하고 싶을때
  // 현재 작동으 제대로 안됨
  await db
    .collection("post")
    .updateOne({}, { $set: { title: "냠냠", content: "맛있어" } });

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          name="_id"
          style={{ display: "none" }}
          defaultValue={result._id.toString()}
        />
        <button type="sumbit">수정완료</button>
      </form>
    </div>
  );
}
