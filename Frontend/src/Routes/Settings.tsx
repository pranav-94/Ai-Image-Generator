import axios from "axios"
import { useState } from "react"

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
        <>
           <button onClick={handleClick}>Delete User</button>
        </>
    )
}

export default Settings