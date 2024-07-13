import { useNavigate } from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
           <div className="hidden md:flex flex-col  w-[25%] h-[100%] bg-slate-50">
              <TopSection/>
              <MiddleSection/>
              <BottomSection/>
           </div>
        </>
    )
}

const TopSection = ()=>{
    return(
        <div className="w-[100%] h-[100px]">
           <p>Header</p>
        </div>
    )
}

const MiddleSection = ()=>{
    const navigate = useNavigate()

    const handleImg = ()=>{
        navigate("/home")
    }

    const handleSettings = ()=>{
        navigate("/settings")
    }

    return(
        <div className="w-[100%] h-[300px] flex flex-col justify-evenly ">
          <p onClick={handleImg}>Image Generator</p>
          <p >Text Generator</p>
          <p onClick={handleSettings}>Settings</p>
        </div>
    )
}

const BottomSection = ()=>{
    return(
        <div>
           <p>History of user</p>
        </div>
    )
}

export default Navbar