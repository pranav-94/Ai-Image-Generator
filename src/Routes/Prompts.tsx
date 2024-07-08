import { useEffect, useState } from "react"
import axios from 'axios'

const Prompts = ()=>{

    const [promptText,setPromptText ] = useState([])
    const username = localStorage.getItem('username')

    useEffect(()=>{
        const fetchData =async()=>{
           const res = await axios.get('http://localhost:3000/userPrompts',{
              user: username
         })
         console.log(res.data)
         setPromptText(res.data)
      } 
      fetchData()
    },[])

    return(
        <>
    <div className="w-[100%] h-[550px] bg-slate-900 text-slate-200 flex justify-center items-center">
    {
            promptText.map((item)=>{
                return(
                    <>
                       <p>{item.promptText}</p>
                    </>
                )
            })
         }
    </div>
        </>
    )
}

export default Prompts 