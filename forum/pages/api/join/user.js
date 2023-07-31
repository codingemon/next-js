export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    if (req.body.id == "") {
      return res.status(500).json("아이디를 입력하세요");
    } else if (req.body.pass == "") {
      return res.status(500).json("비밀번호를 입력하세요");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("user").insertOne(res.body);
    return res.status(200).redirect("/");
  }
}
