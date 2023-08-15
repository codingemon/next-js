import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  //   console.log(request.nextUrl);
  //   console.log(request.cookies);
  //   console.log(request.headers);
  //   NextResponse.next()
  //   // 다른페이지로 이동 시캬주세요
  //   NextResponse.redirect()
  //   NextResponse.rewrite()

  //   const session = await getToken({ req: request });

  //   if (request.nextUrl.pathname.startsWith("/write")) {
  //     if (session == null) {
  //       return NextResponse.redirect(
  //         new URL("http://localhost:3000/api/auth/signin"),
  //         request.url
  //       );
  //     }
  //   }

  //   if (request.nextUrl.pathname.startsWith("/list")) {
  //     console.log(new Data());
  //     console.log(request.headers.get("sec-ch-ua-platform"));
  //     return NextResponse.next();
  //   }

  request.cookies.get("쿠키이름"); //출력
  request.cookies.has("쿠키이름"); //존재확인
  request.cookies.delete("쿠키이름"); //삭제

  const response = NextResponse.next();
  response.cookies.set({
    name: "mode",
    value: "dark",
    maxAge: 3600,
    httpOnly: true, // 자바스크립트로 쿠키조작 불가능
  });
  return response; //쿠키생성
}
