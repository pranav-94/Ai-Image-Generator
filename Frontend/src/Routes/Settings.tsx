import axios from "axios"
import { useState } from "react"
import Navbar from "../Components/Navbar"
import NavItems from "../Components/NavItemsMobile"

const Settings  = ()=>{

    const[password,getPassword ] = useState('')
    const [mode,setMode] = useState(false)
    const [click,setClick] = useState(false)

    const username = localStorage.getItem('username')

const handleClick = async()=>{
   const deleteData = await axios.delete('http://localhost:3000/deleteUser',{
       data:{ username :username}
    })
}

const handleMode =()=>{
    setMode(!mode)
  }

  const handleNav=()=>{
    setClick(!click)
 }
           return(
    <div className={`${mode===true? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'} md:w-[100%] md:flex`}>
    <Navbar mode={mode}/>
  <div className= {`md:w-[75%] flex flex-col sticky top-0 md:h-[700px] `}>
  <div >
   <div className="w-[100%] h-[100px] flex justify-between items-center ">
      <p className="md:ml-[100px] ml-[30px]">Ai Image Generator</p>
      <div className="flex ">
      <p className="flex md:mr-[100px]" onClick={handleMode}>Mode</p>
      <p onClick={handleNav} className="md:hidden  mr-[30px]">Menu</p>

      </div>
   </div >
   {
            click===true ? <NavItems/> : <></>
     }
   <div className="w-[100%] h-[100px] items-center justify-evenly bg-slate-500 flex flex-col">
        <input className="pl-[5px]" type="text" placeholder="Enter password" onChange={e=>{getPassword(e.target.value)}}/>
          <button onClick={handleClick}>Delete</button>
          </div>
  </div>
  </div>
  </div>
    )
}

export default Settings