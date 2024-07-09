function Item({ name, isDone }) {
  return (
  <li>
    {isDone ? (<del>name + ' ✔'</del>) : name}
  </li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>오늘 할 일</h1>
      <ul>
        <Item
          isDone={true}
          name="리액트 공부"
        />
        <Item
          isDone={false}
          name="피그마 활용"
        />
      </ul>
    </section>
  )
}