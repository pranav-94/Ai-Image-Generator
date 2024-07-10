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
      const imgData = new FormData()
      imgData.append('file',response)
      imgData.append('user', user);
      imgData.append('Text', input);
      setImg(imgUrl)
      setLoading(false)
      console.log(response)
      console.log(imgData)

      await axios.post('http://localhost:3000/promptData',imgData, 
      {headers: {
        'Content-Type': 'multipart/form-data',
      }})
    });
  }

  return(
    <div className="w-[100%] h-[550px] bg-slate-100 text-slate-900 flex justify-center items-center">
      <div className="w-[500px] h-[500px] flex justify-evenly items-center flex-col">
        <p className="text-[22px] font-semibold">Ai Image <span className="text-emerald-500" >Generator</span></p>
      <img src={`${img}`} className="w-[300px] h-[300px]"  />
      {
        loading===true ? <p>loading...</p> : <p></p>
      }
       <input className="w-[300px] h-[40px] rounded-md text-black" placeholder="Enter Text Here" type="text" onChange={(e)=>{setInput(e.target.value)}}/>
       <button className="bg-emerald-500 w-[130px] h-[40px] rounded-md text-slate-900 font-bold" onClick={handleClick}>Show Result</button>
       </div>
    </div>
  )
}

export default Home