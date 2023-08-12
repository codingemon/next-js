"use client";
// 서버에게 DB출력결과 달라고 부탁은 가능
import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");

  // 쓸데없는 코드 보관함 (ajax, 타이머등 넣어줌)
  // useEffect 특징
  // 1. html 로드/재렌더링될 때 마다 실행됨
  // 2. html 보여준 후에 늦게 실행시작
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div>댓글목록</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
