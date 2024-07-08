import { getImageUrl } from './utils.js';
import './App.css'

export function Avatar ({person, size}) {
  return (
    <img 
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export function Card (props) {
  return (
    <div className='card' width={props.size}>
      {props.children}
    </div>
  )
}

function Profile (props) {
  return (
    <div className="background-grey">
      <Avatar {...props}/>
    </div>
  )
}

export default Profile;