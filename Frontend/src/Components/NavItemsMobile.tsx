import { useNavigate } from "react-router-dom"

const NavItems =()=>{

const navigate = useNavigate()

    return(
        <div className={`md:hidden flex flex-col justify-evenly items-end  transition-all duration-700 delay-500 ease-in-out `}>
        <div className="flex flex-col mr-5 justify-evenly items-center text-slate-200 bg-slate-900 w-[200px] h-[170px] rounded-md transform  transition-all duration-700 delay-500 ease-in-out">
           <p onClick={()=>{
            navigate('/Home')
           }} className="text-center cursor-pointer">Image Generator</p>
           <p onClick={()=>{
            navigate('/text-generator')
           }} className="text-center cursor-pointer">Text Generator</p>
           <p onClick={()=>{
            navigate('/Settings')
           }} className="text-center cursor-pointer">Settings</p>
           <p className="text-center cursor-pointer">Mode</p>
           <p onClick={()=>{
               localStorage.removeItem('username')
               navigate('/')
           }} className="text-center cursor-pointer">LogOut</p>
           </div>
        </div>
    )
}

export default NavItems