"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={"/edit/" + result[i]._id}>수정</Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: result[i]._id,
              })
                .then((r) => {
                  if (r.status == 200) {
                    return r.json();
                  } else {
                    //서버가 에러코드전송시 실행할 코드
                  }
                })
                .then((result) => {
                  //성공시 실행할 코드
                })
                .catch((error) => {
                  //인터넷문제로 실패시 실행할 코드
                  console.log(error);
                });
            }}
          >
            / 삭제
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}

// import Link from "next/link";
// // export default function ListItem({result}) {
// //   return (
// //     <div>
// //       {result.map((a, i) => {
// //         <div className="list-item" key={i}>
// //           <Link href={"/detail" + result[i]._id}>
// //             {props.result[i].title}
// //           </Link>
// //           <Link href={"/edit" + props.result[i]._id} className="list-btn">
// //             ✏️
// //           </Link>
// //           <button>삭제</button>
// //           <p>1월 1일</p>
// //         </div>;
// //       })}
// //     </div>
// //   );
// // }

// // // import { useEffect } from "react";
// export default function ListItem(props) {
//   // useEffect(() => {
//   //   // 서버에 부탁하는 식으로 가져와야함
//   //   // 단점 :   검색 노출 어려울 수도 있음
//   // }, []);
//   return (
//     <div>
//       <h4>안녕하세요</h4>
//       <a>다른거 다 전송 잘되네</a>
//       {props.result.map((e, i) => {
//         <div className="list-item" key={i}>
//           <Link href={"/detail/" + props.result[i]._id}>
//             <h4>{props.result[i].title}</h4>
//           </Link>
//           <Link href={"/edit/" + props.result[i]._id}>수정</Link>
//         </div>;
//       })}

//       {/* {result.map((a, i) => {
//         <div className="list-item" key={i}>
//           <Link href={"/detail" + result[i]._id.toString}>
//             <h4>{result[i].title}</h4>
//           </Link>
//           <Link href={"/edit" + result[i]._id}>수정</Link>
//           <span
//             onClick={() => {
//               fetch("/api/test", { method: "POST" }).then(() => {
//                 console.log(123123);
//               });
//             }}
//           >
//             삭제
//           </span>
//           <p>1월 1일</p>
//         </div>;
//       })} */}
//     </div>
//   );
// }
