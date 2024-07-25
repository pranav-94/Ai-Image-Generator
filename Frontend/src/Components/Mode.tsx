import {useState,useContext} from 'react'
import {useRecoilState} from 'recoil'
import { modeAtom } from '../Recoil/atoms'

const Mode = ()=>{
    const [mode,setMode] = useRecoilState(modeAtom)
    const handleMode =()=>{
        setMode(!mode)
      }
      console.log(mode,setMode)
    return(
        <>
               <p className="flex md:mr-[100px]" onClick={handleMode}>Mode</p>
        </>
    )
}

export default Mode