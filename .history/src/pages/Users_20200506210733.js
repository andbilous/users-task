import React,{useEffect} from 'react'
import axios from 'axios';

export const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = 
 
    setData(result.data);
  },[])
  return (
    <div>
      
    </div>
  )
}
