import { useLocation, useNavigate } from "react-router-dom"
import Recent from "./RecentSearchImg"
import RecentText from "./RecentSearchText"
import { ImageIcon, MessageSquare, Settings, Sparkles } from 'lucide-react'

type setMode = {
    mode: boolean
}

type setUsername = {
    username: string
}

const Navbar:React.FC<setMode> = ({mode})=>{
    const location = useLocation()
    const username = localStorage.getItem('username')
    const logo:any = username?.slice(0,1)

    return(
        <>
           <div className={`hidden md:flex flex-col  w-[25%]  items-center  border-r-2 ${mode===true?"border-slate-600":""}`}>
              <TopSection username={logo}/>
              <MiddleSection mode={mode}/>
              {
                location.pathname === '/text-generator' ? <RecentText/> : location.pathname === '/home' ? 
                <Recent/> : <></>
              }
              <LogOut mode={mode}/>
           </div>
        </>
    )
}

const TopSection:React.FC<setUsername> = ({username})=>{
    return(
        <div className="w-[100%] h-[100px] flex justify-evenly items-center">
           <p>AI Byte</p>
           <p className="w-[40px] h-[40px] rounded-full bg-red-500 text-slate-200 flex justify-center items-center text-[22px]">{username}</p>
        </div>
    )
}

const MiddleSection:React.FC<setMode> = ({mode})=>{
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
          <div className="flex justify-center items-center">
          <ImageIcon/>
          <p onClick={handleImg} className={`  w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "  text-slate-100": "text-slate-700 " } transition-all duration-500 ease-in-out`}>Image Generator</p>
          </div>
          <div className="flex justify-center items-center">
            <MessageSquare/>
          <p className={`  w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "  text-slate-100": "text-slate-700 " } transition-all duration-500 ease-in-out `} onClick={handleText}>Text Generator</p>
          </div>
          <div className="flex justify-center items-center">
            <Settings/>
          <p className={`  w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "  text-slate-100": "text-slate-700 " } transition-all duration-500 ease-in-out`} onClick={handleSettings}>Settings</p>
        </div>
        </div>
    )
    }

    const LogOut:React.FC<setMode> = ({mode})=>{
        const navigate = useNavigate()

        const handleLog = ()=>{
            localStorage.removeItem('username')
            navigate('/')
        }

        return(
            <>
            <div className=" w-[85%] mt-5 mb-5">
            <button className={`rounded-md  w-[150px] h-[35px] ${mode===true ? "bg-teal-400 text-slate-900" : " "}`} onClick={handleLog}>Log-out</button>
            </div>
            </>
        )
    }

export default Navbar