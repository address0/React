import './App.css';
import Hello from './Hello';
import { Goodbye } from './Hello';

function App() {
  return (
    <div>
      <img
      src='https://i.imgur.com/MK3eW3Am.jpg'
      alt="Katherine Johnson"
      class="photo"
      />
      <hr />
      <Hello />
      <Goodbye />
      <h1>Hedy Lamarr's Todos</h1>
      <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
      />
      <ul>
          <li>Invent <b>new traffic lights</b></li>
          <li>Rehearse a movie scene</li>
          <li>Improve the <i>spectrum technology</i></li>
      </ul>
    </div>
  );
}

export default App;
