import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { modeAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ()=>{

    const [username,setUsername]= useState('')
    const [email,setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const mode = useRecoilValue(modeAtom)
    const navigate = useNavigate()

    const handleClick = async()=>{
    try{
         const res = await axios.post(`https://ai-image-generator-woye.onrender.com/signUp`,{
            username: username,
            email: email,
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
            <p className="text-[25px]">Sign-Up</p>
            <p>Enter your information to create an account</p>
            </div>
            <div className="w-[50%] flex flex-col justify-evenly items-center h-[280px] ">
            <div>
                <p>Name</p>
           <input type="text" className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" onChange={e=>{setUsername(e.target.value)}} placeholder="Username"/>
           </div>
           <div>
           <p>Email</p>
           <input type="text" className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" onChange={e=>{setEmail(e.target.value)}} placeholder="@mail.com"/>
           </div>
           <div>
           <p>Password</p>
           <input type="text" className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" onChange={e=>{setPassword(e.target.value)}} placeholder="Min 8 characters"/>
           </div>
           <button className="" onClick={handleClick}>Submit</button>
           <Link to={'/signin'} >Already have an account?</Link>
           </div>
        </div>
    <ToastContainer/>
    </>
    )
}

export default SignUp