export default function User() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="/api/join/user" method="POST">
        <input name="id" placeholder="아이디를 입력하세요" />
        <input
          name="pass"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button type="sumbit">작성</button>
      </form>
    </div>
  );
}
