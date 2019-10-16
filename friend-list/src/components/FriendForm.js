import React from 'react';


const FriendForm = () => {
  const initialState = {
    name: '',
    age: '',
    email: ''
  } 

  const [Friend, setFriend] = useState(initialState)

  return (
    <div>
      <input name="name" placeholder="Name" value={} />
      <input name="email" placeholder="Email" value={} />
      <input name="age" placeholder="Age" value={} />
      <input name="" placeholder="" value={} />
    </div>
  )
}

export default FriendForm;