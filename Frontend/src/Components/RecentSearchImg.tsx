import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import {  imgUrlAtom, loadingAtom } from '../Recoil/atoms'
import {useRecoilState} from 'recoil'

const Recent = ()=>{

    const [prompt,setPrompt] = useState([])
    const [loading, setLoading] = useRecoilState(loadingAtom)
    const [img ,setImg ] = useRecoilState(imgUrlAtom)
    const username = localStorage.getItem('username')

    const apiKey = import.meta.env.REACT_APP_API_KEY
    const apiURL = import.meta.env.REACT_APP_API_URL

    useEffect(()=>{
        const recent =async()=>{
           const response = await axios.get("http://localhost:3000/userPrompts",{
          params:{  user: username}
           })

            setPrompt(response.data)
        }
        recent()
    },[])

    // const handleData = async()=>{

    // }

    return(
        <div className='w-[90%]'>
           <p className='text-[25px]'>Recent</p>
           {
              prompt.map((item:any)=>{
                return(
                    <>
                       <p className=" h-[35px] mt-2 mb-2 text-[16px] flex items-center p-3 w-max hover:bg-slate-300 rounded-md  cursor-pointer" id="useText" onClick={()=>{
                                setLoading(true)
                                async function query(data:any) {
                                  const response = await fetch(
                                    `${apiURL}`,
                                    {
                                      headers: {
                                        Authorization: "Bearer "+`${apiKey}`,
                                        "Content-Type": "application/json",
                                      },
                                      method: "POST",
                                      body: JSON.stringify(data),
                                    }
                                  );
                                  const result = await response.blob();
                                  return result;
                                }
                                query({"inputs": item.promptText}).then(async(response) => {
                                  const imgUrl = URL.createObjectURL(response)
                                  setImg(imgUrl)
                                  setLoading(false)
                                  console.log(response)
                            
                                  await axios.post('http://localhost:3000/promptData',{
                                     user: username,
                                     Text: item.promptText
                                  })
                                });
                       }}>{item.promptText}</p>
                    </>
                )
              })
           }
        </div>
    )
}

export default Recent