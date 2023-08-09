export default function handler(req, res) {
  console.log("안녕");
  return req.status(200).json();
}
