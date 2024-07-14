import { useState } from "react"

const Nav = ({mode})=>{

    const [click,setClick] = useState(false)

const handleNav=()=>{
   setClick(!click)
}

    return(
        <div className="ml-3">
          <p onClick={handleNav} className="md:hidden  mr-[30px]">Menu</p>
          {
            click===true ? <NavItems/> : <></>
          }
        </div>
    )
}

const NavItems =()=>{
    return(
        <div className={` flex flex-col justify-evenly items-start sticky top-[150px]`}>
           <p>Image Generator</p>
           <p>Text Generator</p>
           <p>Settings</p>
           <p>Mode</p>
        </div>
    )
}

export default Nav