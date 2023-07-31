export default function Write() {
  return (
    <>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <input name="title" />
        <button type="sumbit">버튼</button>
      </form>
    </>
  );
}
