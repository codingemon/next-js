"use client";
// 서버에게 DB출력결과 달라고 부탁은 가능
import { useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
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
