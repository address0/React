import './App.css';

function hello() {
  const click = function (event) {
    alert('Hello, world!')
  }

  return (
    <button onClick={click}>click me!</button>
  )
}

export function Goodbye () {
  const click = function (event) {
    alert('Goodbye, world!')
  }

  return (
    <button onClick={click}>Don't click me!!</button>
  )
}

export default hello