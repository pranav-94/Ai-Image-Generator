import { useState } from "react"

const Nav = ()=>{

    const [click,setClick] = useState(false)

const handleNav=()=>{
   setClick(!click)
}

    return(
        <div>
          <p onClick={handleNav} className="md:hidden  mr-[30px]">Menu</p>
          {
            click===true ? <NavItems/> : <></>
          }
        </div>
    )
}

const NavItems =()=>{
    return(
        <div className=" bg-white">
           <p>Image Generator</p>
           <p>Text Generator</p>
           <p>Settings</p>
           <p>Mode</p>
        </div>
    )
}

export default Nav