import Link from "next/link";

export default function Home() {
  let name = "choi";
  return (
    <div>
      <h4 className="title">코딩에몽후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
