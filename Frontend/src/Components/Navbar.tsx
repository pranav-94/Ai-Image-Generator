import { useLocation, useNavigate } from "react-router-dom"
import Recent from "./RecentSearchImg"
import RecentText from "./RecentSearchText"

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
          <p onClick={handleImg} className={`hover:bg-slate-500 border-[1px] border-slate-100 w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "hover:bg-slate-100 border-slate-100 border-[1px] hover:text-slate-900": "hover:bg-slate-900 hover:text-slate-200" } transition-all duration-500 ease-in-out`}>Image Generator</p>
          <p className={`hover:bg-slate-500 border-[1px] border-slate-100 w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "hover:bg-slate-100 border-slate-100 border-[1px] hover:text-slate-900": "hover:bg-slate-900 hover:text-slate-200" } transition-all duration-500 ease-in-out `} onClick={handleText}>Text Generator</p>
          <p className={`hover:bg-slate-500 border-[1px] border-slate-100 w-[150px] pl-2  h-[40px] rounded-md flex items-center cursor-pointer justify-start ${mode===true? "hover:bg-slate-100 border-slate-100 border-[1px] hover:text-slate-700": "hover:bg-slate-900 hover:text-slate-200" } transition-all duration-500 ease-in-out`} onClick={handleSettings}>Settings</p>
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
            <button className={`rounded-md  w-[150px] h-[35px] ${mode===true ? "bg-teal-400 text-slate-900" : "bg-slate-900 text-white "}`} onClick={handleLog}>Log-out</button>
            </div>
            </>
        )
    }

export default Navbar