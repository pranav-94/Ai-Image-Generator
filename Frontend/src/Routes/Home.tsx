import { useEffect, useState } from "react";
import axios from 'axios'

const Home = ()=>{

  const [img ,setImg ] = useState('')
  const [input,setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const apiKey = import.meta.env.REACT_APP_API_KEY
  const apiURL = import.meta.env.REACT_APP_API_URL

  const user = localStorage.getItem('username')

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
    query({"inputs": input}).then((response) => {
      if(img === ''){
      }
      const imgUrl = URL.createObjectURL(response)
      setImg(imgUrl)
      setLoading(false)
      console.log(imgUrl)
    });

    await axios.post('http://localhost:3000/userPrompts',{
      user: user,
      Text: input,
      Url: img
    })

  }

  return(
    <div className="w-[100%] h-[550px] bg-slate-900 text-slate-200 flex justify-center items-center">
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