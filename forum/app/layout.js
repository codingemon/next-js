import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginOutBtn from "./LoginOutBtn";
import { cookies } from "next/headers";
import DarkMod from "./DarkMod";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  let res = cookies().get("mode");
  console.log(res.value);
  console.log(session);
  return (
    <html lang="en">
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            EmonForum
          </Link>
          <Link href="/list">List</Link>
          {
            // 조건식 ? 조건식참일때실행할코드 : 거짓일대실행할코드
            session ? (
              <span>
                {session.user.name} <LoginOutBtn />
              </span>
            ) : (
              <LoginBtn />
            )
          }
          <DarkMod />
        </div>
        {children}
      </body>
    </html>
  );
}
