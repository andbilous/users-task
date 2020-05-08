import React,{useEffect,useState} from 'react'
import usersAPI from '../API/users.api';

export const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = await usersAPI.getUsers()
    setData(result.data);
  },[])
  return (
    <div>
      
    </div>
  )
}
