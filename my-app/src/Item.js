function Item({ name, isDone }) {
  return (
  <li>
    {isDone ? (<del>name + ' ✔'</del>) : name}
  </li>
  )
}

const Todos = ['피그마 구현', '기능명세서 작성', '출근']

export default function PackingList() {
  const todoItems = Todos.map(item => 
    <li key={item.id}>{item}</li>
  );
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
      <h1>내일 할 일</h1>
      <ul>{todoItems}</ul>
    </section>
  )
}