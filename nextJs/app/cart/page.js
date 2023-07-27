import 작명 from "./data.js";
import 작명2 from "../assignment/hello.js";

// 2. client component (파일 맨위에 'use client' 넣고 만든거)
// html에 자바스크립트 기능넣기 가능, useState, useEffect등 사용가능
// 로딩속도 느림(자바스크립트 많이 필요), 로딩속도 느림2(hydration 필요)

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
      <div>{작명2}</div>
    </div>
  );
}

// component 만들기
// 1. function 작명(){}
// 2. return(축약할 긴 HTML)
// 3. <작명/> 사용
// Q. 눈에 보이는거 전부 다 component로 만들면 좋을까? -> component끼리 데이터 공유 귀찮아짐 (복잡해짐)
// 재사용이 잦은 html 덩어리들을 주로 component로 만드는게 좋음
// Next.js 컴포넌트 종류가 2개
// 1. server component 2. client component
// 큰페이지 server component, js기능 필요한 곳만 client component 추천

// 1. server component (아무데나 대충 만든거)
// html 자바스크립트 기능넣기 불가능, 로딩속도 빠름, 검색엔진 노출
function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
