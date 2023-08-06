"use client";

import Link from "next/link";

// import { useEffect } from "react";
export default function ListItem({ result }) {
  // useEffect(() => {
  //   // 서버에 부탁하는 식으로 가져와야함
  //   // 단점 :   검색 노출 어려울 수도 있음
  // }, []);
  return (
    <div>
      {result.map((a, i) => {
        <div className="list-item" key={i}>
          <Link href={"/detail" + result[i]._id}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={"/edit" + result[i]._id}>수정</Link>
          <span
            onClick={() => {
              fetch("/api/test", { method: "POST" }).then(() => {
                console.log(123123);
              });
            }}
          >
            삭제
          </span>
          <p>1월 1일</p>
        </div>;
      })}
    </div>
  );
}
