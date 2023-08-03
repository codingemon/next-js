import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    let 바꿀거 = { title: req.body.title, content: req.body.content };
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: 바꿀거 });
    res.status(200).redirect("/list");
  }
}
