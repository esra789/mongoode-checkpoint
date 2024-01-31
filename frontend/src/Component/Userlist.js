import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getUsers } from '../Redux/Action'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Userlist = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(getUsers())
    },[dispatch])
    const users=useSelector(state=>state.users)
  return (
    <div>
        {users.map(user=><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
         age: {user.age}
         <br/>
         gender: {user.gender}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
)}
    </div>
  )
}

export default Userlist


