import './App.css';
import Hello from './Hello';
import { Goodbye } from './Hello';

function App() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
  const description = 'Hedy Lamarr'
  const today = new Date();
  const person = {
    name: 'SSAFY',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  }
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
      <h1 style={{color: 'blue'}}>{description}'s photo on {formatDate(today)}</h1>
      <img
      className="avatar"
      src={avatar}
      alt={description}
      />
      <h3 style={person.theme}>Hi, my name is {person.name}!</h3>
    </div>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday:'long'}
  ).format(date);
}

export default App;
