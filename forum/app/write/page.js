"use client";

import { useState } from "react";

export default function Write() {
  let [src, setSrc] = useState("");

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            let filename = encodeURIComponent(file.name);
            let res = await fetch("/api/post/image?file=file.name" + filename);
            res = await res.json();

            const formData = new FormData();
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value);
            });
            let 업로드결과 = await fetch(res.url, {
              method: "POST",
              body: formData,
            });
            setSrc(업로드결과.url + "/" + filename);
          }}
        />
        <img src="{src}" />
        <button type="sumbit">작성완료</button>
      </form>
    </div>
  );
}
