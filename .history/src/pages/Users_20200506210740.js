import React,{useEffect} from 'react'
import 

export const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = await 
 
    setData(result.data);
  },[])
  return (
    <div>
      
    </div>
  )
}
