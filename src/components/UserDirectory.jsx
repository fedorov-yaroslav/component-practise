import { useState } from "react";
import Card from "./Card.jsx";
import SearchBar from "./SearchBar.jsx";

function UserDirectory({users}) {
  const [input, setInput ] = useState('');
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()))


  return (
      <>
        <SearchBar
            input = {input}
            setInput = {setInput}
        />
        {filteredUsers.map((user) =>
          <Card user={user}/>
        )}
      </>
  )
}

export default UserDirectory