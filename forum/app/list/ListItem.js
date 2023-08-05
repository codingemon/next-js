"use client";

import { useEffect } from "react";

export default function ListItem() {
  useEffect(() => {}, []);

  {
    result.map((a, i) => {
      return (
        <Link prefetch={false} href={"/detail/" + result[i]._id}>
          <div className="list-item">
            <h4>{result[i].title}</h4>
            <p>11월 23일</p>
            <Link href={"/edit/" + result[i]._id}>✏️수정</Link>
          </div>
        </Link>
      );
    });
  }
}
