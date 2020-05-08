import React,{useEffect} from 'react'
import usersAPI from '../API/users.api';

export const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = await usersAPI.g
 
    setData(result.data);
  },[])
  return (
    <div>
      
    </div>
  )
}
