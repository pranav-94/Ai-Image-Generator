import { useEffect, useState } from "react"
import axios from 'axios'

const Prompts = ()=>{

    const [promptText,setPromptText ] = useState([])
    const [url,setUrl] = useState('')
    const username = localStorage.getItem('username')

    useEffect(()=>{
        const fetchData =async()=>{
           const res = await axios.get('http://localhost:3000/allPosts',{
              user: username,
              responseType: 'arraybuffer'
         })
         const blob = new Blob([res.data],{type:'image/jpeg'})
         console.log(blob)
         const imgUrl = URL.createObjectURL(blob)
         console.log(imgUrl)
              } 
      fetchData()
    },[])


    return(
        <>
    <div className="w-[100%] h-[550px] bg-slate-900 text-slate-200 flex justify-center items-center">
    </div>
        </>
    )
}

export default Prompts 