import { useNavigate } from "react-router-dom"
import Recent from "./RecentSearchImg"

const Navbar = ({mode})=>{
    const username = localStorage.getItem('username')

    return(
        <>
           <div className="hidden md:flex flex-col  w-[25%]  items-center border-r-2 ">
              <TopSection username={username}/>
              <MiddleSection mode={mode}/>
              <Recent username={username}/>
              <LogOut mode={mode}/>
           </div>
        </>
    )
}

const TopSection = ({username})=>{
    return(
        <div className="w-[100%] h-[100px] flex justify-evenly">
           <p>Header</p>
           <p>{username}</p>
        </div>
    )
}

const MiddleSection = ({mode})=>{
    const navigate = useNavigate()

    const handleImg = ()=>{
        navigate("/home")
    }

    const handleSettings = ()=>{
        navigate("/settings")
    }

    const handleText = ()=>{
        navigate("/text-generator")
    }

    return(
        <div className="w-[90%] text-[18px] h-[200px] flex flex-col justify-evenly items-start  ">
          <p onClick={handleImg} className={`hover:bg-slate-500 border-[1px] border-slate-900 w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "hover:bg-slate-100 border-slate-200 border-[1px] hover:text-slate-900": "hover:bg-slate-900 hover:text-slate-200" }`}>Image Generator</p>
          <p className={`hover:bg-slate-500 border-[1px] border-slate-900 w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "hover:bg-slate-100 border-slate-200 border-[1px] hover:text-slate-900": "hover:bg-slate-900 hover:text-slate-200" }`} onClick={handleText}>Text Generator</p>
          <p className={`hover:bg-slate-500 border-[1px] border-slate-900 w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "hover:bg-slate-100 border-slate-200 border-[1px] hover:text-slate-700": "hover:bg-slate-900 hover:text-slate-200" }`} onClick={handleSettings}>Settings</p>
        </div>
    )
    }

    const LogOut = ({mode})=>{
        const navigate = useNavigate()

        const handleLog = ()=>{
            localStorage.removeItem('username')
            navigate('/')
        }

        return(
            <>
            <button className={`rounded-md  w-[150px] h-[35px] ${mode===true ? "bg-teal-400 text-slate-900" : "bg-slate-900 text-white"}`} onClick={handleLog}>Log-out</button>
            </>
        )
    }

export default Navbar