import {  useContext, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import NavItems from "../Components/NavItemsMobile";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Download from "../Components/DownloadImg";
import Mode from "../Components/Mode";
import {useRecoilState,useRecoilValue} from 'recoil'
import { modeAtom,imgPromptsAtom, imgUrlAtom,loadingAtom } from '../Recoil/atoms'
// import { MyContext } from "../Recoil/ModeContext";

const Home = ()=>{

  const [img ,setImg ] = useRecoilState(imgUrlAtom)
  const [input,setInput] = useRecoilState(imgPromptsAtom)
  const [loading, setLoading] = useRecoilState(loadingAtom)
  const [click,setClick] = useState(false)
  const mode = useRecoilValue(modeAtom)
  // console.log(mode)

  const navigate = useNavigate()

  const apiKey = import.meta.env.REACT_APP_API_KEY
  const apiURL = import.meta.env.REACT_APP_API_URL

  const user = localStorage.getItem('username')
  if(user === null){
     return navigate('/')
  }

  const handleClick=async()=>{

    if(input === ''){
     return toast('Enter prompt first')
    }

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

      await axios.post('http://localhost:3000/promptData',{
         user: user,
         Text: input
      })
    });
  }

    // const handleMode =()=>{
    //   setMode(!mode)
    // }

    const handleNav=()=>{
      setClick(!click)
   }

  return(
    <div className={`${mode===true? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'} md:w-[100%] md:flex`}>
      <Navbar mode={mode}/>
    <div className= {`md:w-[75%] flex flex-col sticky top-0 md:h-[700px] `}>
    <div >
     <div className="w-[100%] h-[100px] flex justify-between items-center ">
        <p className="md:ml-[100px] ml-[30px]">PixelAlchemy</p>
        <div className="flex ">
        {/* <p className="flex md:mr-[100px]" onClick={handleMode}>Mode</p> */}
        <p onClick={handleNav} className="md:hidden  mr-[30px]">Menu</p>
        <Mode/>
        </div>
     </div>
     {
            click===true ? <NavItems/> : <></>
     }
     <div className="w-[100%]  h-auto flex flex-col items-center justify-evenly">
      <div className="md:w-[80%] w-[100%]  h-[130px] items-center flex flex-col md:items-end justify-evenly ">
       <input className=" md:w-[100%] w-[80%] rounded-md pl-[10px] h-[40px] bg-slate-600" type="text" placeholder="Enter a prompt to generate an image" onChange={(e)=>{setInput(e.target.value)}}/>
       <button className={`rounded-md  w-[150px] h-[35px] ${mode===true ? "bg-teal-400 text-slate-900" : "bg-slate-900 text-white"}`} onClick={handleClick}>Show Result</button>
       </div>
      <div className="w-[100%] flex-col pb-[50px]  h-auto  flex items-center justify-evenly">
      {
        loading===true ? <p>loading...</p> : <p></p>
      }
      {
        img=== ''?<div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-md border-[1px] border-slate-600"></div>:
       <img src={`${img}`} className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-md" />
      }
       {
        img==='' ? 
        <></> : <Download img={img} mode={mode}/>
}
    </div>
       </div>
       </div>
       </div>
       <ToastContainer/>
       </div>
  )
}

export default Home