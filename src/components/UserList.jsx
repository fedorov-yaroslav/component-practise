import UserItem from './components/UserItem.jsx'

function UserList() {
  return (
      <>
        {filteredUsers.map(user =>
            <UserItem />
        )}
      </>
  )
}

export default UserList