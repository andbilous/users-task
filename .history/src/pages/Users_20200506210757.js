import React,{useEffect} from 'react'
import usersAPI from '../API/users.api';

export const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = await us
 
    setData(result.data);
  },[])
  return (
    <div>
      
    </div>
  )
}
