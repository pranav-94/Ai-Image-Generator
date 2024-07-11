import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Home = ()=>{

  const [img ,setImg ] = useState('')
  const [input,setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const apiKey = import.meta.env.REACT_APP_API_KEY
  const apiURL = import.meta.env.REACT_APP_API_URL

  const user = localStorage.getItem('username')
  if(user === null){
      navigate('/')
  }
  console.log(user)

  const handleClick=async()=>{
    setLoading(true)
    async function query(data) {
      const response = await fetch(
        `${apiURL}`,
        {
          headers: {
            Authorization: "Bearer "+`${apiKey}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return result;
    }
    query({"inputs": input}).then(async(response) => {
      const imgUrl = URL.createObjectURL(response)
      setImg(imgUrl)
      setLoading(false)
      console.log(response)

      await axios.post('http://localhost:3000/promptData',{
         user: user,
         Text: input
      })
    });
  }

  return(
    <div className="">
      <div >
        <p >Ai Image Generator</p>
      <img src={`${img}`}  />
      {
        loading===true ? <p>loading...</p> : <p></p>
      }
       <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
       <button onClick={handleClick}>Show Result</button>
       </div>
    </div>
  )
}

export default Home