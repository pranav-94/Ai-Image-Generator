import axios from "axios"
import { useState } from "react"
import Navbar from "../Components/Navbar"

const Settings  = ()=>{

    const[password,getPassword ] = useState('')

    const username = localStorage.getItem('username')

const handleClick = async()=>{
    await axios.delete('http://localhost:3000/deleteUser',{
        username :username,
        password: password
    })
}
           return(
    <div className="bg-slate-300 md:flex">
      <Navbar/>
    <div className= "md:w-[75%] flex flex-col">
          <button onClick={handleClick}>Delete</button>
       </div>
       </div>
    )
}

export default Settings