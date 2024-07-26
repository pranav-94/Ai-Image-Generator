import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { modeAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"

const SignUp = ()=>{

    const [username,setUsername]= useState('')
    const [email,setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const mode = useRecoilValue(modeAtom)
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
           <input type="text" className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" onChange={e=>{setEmail(e.target.value)}} placeholder="Email"/>
           </div>
           <div>
           <p>Password</p>
           <input type="text" className="border-[1px] border-slate-700 outline-none pl-1 w-[250px] h-[30px]" onChange={e=>{setPassword(e.target.value)}} placeholder="Password"/>
           </div>
           <button className="" onClick={handleClick}>Submit</button>
           <Link to={'/signin'} >Already have an account?</Link>
           </div>
        </div>
    )
}

export default SignUp