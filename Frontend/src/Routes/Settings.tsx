import axios from "axios"
import { useState } from "react"
import Navbar from "../Components/Navbar"
import NavItems from "../Components/NavItemsMobile"
import { useNavigate } from "react-router-dom"
import {useRecoilValue } from 'recoil'
import { modeAtom } from "../Recoil/atoms"
import Mode from "../Components/Mode"

const Settings  = ()=>{

    const [click,setClick] = useState(false)
    const mode = useRecoilValue(modeAtom)
    const navigate = useNavigate()

    const username = localStorage.getItem('username')
  //   if(username === null){
  //     return navigate('/')
  //  }

const handleClick = async()=>{
   const deleteData = await axios.delete('https://ai-image-generator-woye.onrender.com/deleteUser',{
       data:{ username :username}
    })
    localStorage.removeItem('username')
    navigate('/')
    console.log(deleteData)
}

  const handleNav=()=>{
    setClick(!click)
 }
           return(
    <div className={`${mode===true? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'} md:w-[100%] md:flex`}>
    <Navbar mode={mode}/>
  <div className= {`md:w-[75%] flex flex-col sticky top-0 `}>
  <div >
   <div className="w-[100%] h-[100px] flex justify-between items-center ">
      <p className="md:ml-[100px] ml-[30px]">Ai Image Generator</p>
      <div className="flex ">
      <p onClick={handleNav} className="md:hidden  mr-[30px]">Menu</p>
    <Mode/>
      </div>
   </div >
     {
            click===true ? <NavItems/> : <></>
     }
   <div className="w-[100%] h-[487px]  justify-start flex flex-col">

    <div className="flex justify-evenly mt-5">
           <p className="text-[20px]">Delete User Account</p>
          <button className={`rounded-md  w-[150px] h-[35px] ${mode===true ? "bg-teal-400 text-slate-900" : "bg-slate-900 text-white "}`} onClick={handleClick}>Delete</button>
          </div>
          </div>
  </div>
  </div>
  </div>
    )
}

export default Settings