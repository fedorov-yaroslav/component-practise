import {useState} from "react";

function Card({user}) {
  const [showBio, setShowBio] = useState(false)

  return (
      <div key = {user.id} className='card'>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.profession}</p>
        {showBio && <p>{user.bio}</p>}
        <button onClick = {() => setShowBio(prev => !prev)}>{showBio ? 'Hide bio' : 'Show bio'}</button>
      </div>
  )
}

export default Card;