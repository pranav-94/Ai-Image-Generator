import axios from "axios"
import { useState } from "react"
import Navbar from "../Components/Navbar"
import NavItems from "../Components/NavItemsMobile"

const NavComplete  = ()=>{

    const[password,getPassword ] = useState('')
    const [mode,setMode] = useState(false)
    const [click,setClick] = useState(false)

    const username = localStorage.getItem('username')
    console.log(getPassword)

// const handleClick = async()=>{
//     await axios.delete('https://ai-image-generator-woye.onrender.com/deleteUser',{
//         username :username,
//         password: password
//     })
// }

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
      {
            click===true ? <NavItems/> : <></>
     }

      </div>
   </div>
   {/* <div className=" md:flex bg-black">
    <div className= "md:w-[75%] flex flex-col items-center">
        <div className="w-[50%] bg-black flex flex-col">
          <button onClick={handleClick}>Delete</button>
          <input className="w-[50%]" type="text" placeholder="Enter password" onChange={e=>{getPassword(e.target.value)}}/>
          </div>
       </div>
       </div> */}
  </div>
  </div>
  </div>
    )
}

export default NavComplete