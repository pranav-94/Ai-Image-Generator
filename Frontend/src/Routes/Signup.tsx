import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const SignUp = ()=>{

    const [username,setUsername]= useState('')
    const [email,setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleClick = async()=>{
     const res = await axios.post(`http://localhost:3000/signUp`,{
            username: username,
            email: email,
            password: password
       })

       console.log(res)
       navigate('/home')
       localStorage.setItem('username',username)
    }


    return(
        <>
           <input type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="Username"/>
           <input type="text" onChange={e=>{setEmail(e.target.value)}} placeholder="Email"/>
           <input type="text" onChange={e=>{setPassword(e.target.value)}} placeholder="Password"/>
           <button onClick={handleClick}>Submit</button>
           <Link to={'/signin'} >Already have an account?</Link>
        </>
    )
}

export default SignUp