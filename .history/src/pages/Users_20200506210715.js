import React,{useEffect} from 'react'
import ax

export const Users = () => {
  const [data, setData] = useState([]);
  useEffect(async ()=>{
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
 
    setData(result.data);
  },[])
  return (
    <div>
      
    </div>
  )
}
