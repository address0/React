'use client';
export default function MyButton() {
  function pop() {
    alert('button click');
  }
  return (
    <button onClick={pop}>I'm a button</button>
  );
}
