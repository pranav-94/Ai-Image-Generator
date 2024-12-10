// import {useState,useContext} from 'react'
import {useRecoilState} from 'recoil'
import { modeAtom } from '../Recoil/atoms'
import { SunMoon } from 'lucide-react';

const Mode = ()=>{
    const [mode,setMode] = useRecoilState(modeAtom)
    const handleMode =()=>{
        setMode(!mode)
      }
    return(
      <SunMoon onClick={handleMode} className='w-[30px] h-[30px] mr-5 cursor-pointer'/>
    )
}

export default Mode