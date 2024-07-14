import axios from 'axios'
import { useEffect, useState } from 'react'

const Recent = ({username})=>{

    const [prompt,setPrompt] = useState([])

    useEffect(()=>{
        const recent =async()=>{
           const response = await axios.get("http://localhost:3000/userPrompts",{
               username:username
           })

            setPrompt(response.data)
            console.log(response)
        }
        recent()
    },[])

    const handleData = async()=>{
     
    }

    return(
        <div className='w-[90%]'>
           <p className='text-[25px]'>Recent</p>
           {
              prompt.map((item)=>{
                return(
                    <>
                       <p className="w-[100%] h-[30px] mt-2 mb-2 text-[16px] flex items-center  cursor-pointer" onClick={handleData}>{item.promptText}</p>
                    </>
                )
              })
           }
        </div>
    )
}

export default Recent