import {  useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Nav from "../Components/Navbar(mobile)";

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
    async function query(data:any) {
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

  const handleDownload = ()=>{
    const a = document.createElement('a')
    a.href = img 
    a.download = 'downloadImg.jpg'
    console.log(a.href)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    }

  return(
    <div className="bg-slate-300 md:flex">
      <Navbar/>
    <div className= "md:w-[75%] flex flex-col">
     <div className="w-[100%] h-[100px] flex justify-between items-center bg-slate-200">
        <p className="ml-[30px]">Ai Image Generator</p>
        <Nav/>
     </div>
     <div className="w-[100%]  h-auto flex flex-col items-center justify-evenly">
      <div className="md:w-[80%] w-[100%]  h-[130px] items-center flex flex-col md:items-end justify-evenly ">
       <input className="bg-slate-500 md:w-[100%] w-[80%] rounded-md pl-[10px] h-[40px]" type="text" placeholder="Enter a prompt to generate an image" onChange={(e)=>{setInput(e.target.value)}}/>
       <button className="rounded-md bg-slate-500 w-[150px] h-[35px]" onClick={handleClick}>Show Result</button>
       </div>
      <div className="w-[100%] flex-col pb-[50px]  h-auto bg-slate-600 flex items-center justify-evenly">
      {
        loading===true ? <p>loading...</p> : <p></p>
      }
       <img src={`${img}`} className="w-[350px] h-[350px] md:w-[400px] md:h-[400px]" />
       <button onClick={handleDownload}>Download</button>
    </div>
       </div>
       </div>
       </div>
  )
}

export default Home