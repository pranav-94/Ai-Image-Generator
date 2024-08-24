import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignIn = ()=>{

    const [username,setUsername]= useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleClick = async()=>{
        try{
     const res = await axios.post(`https://ai-image-generator-woye.onrender.com/signIn`,{
            username: username,
            password: password
       })

       navigate('/home')
       localStorage.setItem('username',username)
    }
    catch(err:any){
        if(err.response.status === 400){
            toast(err.response.data.msg)
        }
    }
    }


    return(
        <>
        <div className="w-[100%] h-[550px]  flex flex-col items-center justify-evenly">
        <div className="text-center">
            <p className="text-[25px]">Sign-In</p>
            <p>Enter your information to Sign In</p>
            </div>
            <div className="w-[50%] flex flex-col justify-evenly items-center h-[280px] ">
     <div>
        <p>Name</p>
        <input className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="Username"/>
    </div>
    <div>
        <p>Password</p>
<input className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" type="text" onChange={e=>{setPassword(e.target.value)}} placeholder="Password"/>
</div>
<button onClick={handleClick}>Submit</button>
<Link to={'/'} >don't have an account?</Link>

        </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default SignIn