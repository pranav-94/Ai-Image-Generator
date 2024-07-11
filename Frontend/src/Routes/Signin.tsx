import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const SignIn = ()=>{

    const [username,setUsername]= useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleClick = async()=>{
     const res = await axios.post(`http://localhost:3000/signIn`,{
            username: username,
            password: password
       })

       console.log(res)
       navigate('/home')
       localStorage.setItem('username',username)
    }


    return(
        <>
           <input type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="Username"/>
           <input type="text" onChange={e=>{setPassword(e.target.value)}} placeholder="Password"/>
           <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default SignIn