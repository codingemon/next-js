"use client";
// 서버에게 DB출력결과 달라고 부탁은 가능
import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);
  // 쓸데없는 코드 보관함 (ajax, 타이머등 넣어줌)
  // useEffect 특징
  // 1. html 로드/재렌더링될 때 마다 실행됨
  // 2. html 보여준 후에 늦게 실행시작
  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <div>댓글목록</div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => {
            <p key={i}>{a.content}</p>;
          })
        : "댓글없음"}
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
