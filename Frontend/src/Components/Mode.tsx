// import {useState,useContext} from 'react'
import {useRecoilState} from 'recoil'
import { modeAtom } from '../Recoil/atoms'

const Mode = ()=>{
    const [mode,setMode] = useRecoilState(modeAtom)
    const handleMode =()=>{
        setMode(!mode)
      }
    return(
               <img className='md:mr-[100px] mr-3  w-[30px] h-[30px] bg-slate-100 cursor-pointer rounded-full' src="https://cdn-icons-png.freepik.com/256/833/833336.png?semt=ais_hybrid" alt="" onClick={handleMode}/>
    )
}

export default Mode