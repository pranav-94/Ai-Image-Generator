import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { textOutputAtom,textInputAtom } from '../Recoil/atoms'

const RecentText = ()=>{

    const [prompt,setPrompt] = useState([])
    const username = localStorage.getItem('username')
    const [textOutput,  setTextOutput]:any = useRecoilState(textOutputAtom)
    const [constIP,setConstIP] = useRecoilState(textInputAtom)
    console.log(textOutput,constIP);
    const GEMINI_KEY = import.meta.env.REACT_APP_GEMINI_API_KEY

    useEffect(()=>{
        const recent =async()=>{
           const response = await axios.get("https://ai-image-generator-woye.onrender.com/userTexts",{
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
                       <p className=" h-[35px] mt-2 mb-2 text-[16px] flex items-center p-3 w-max hover:bg-slate-300 rounded-md  cursor-pointer" onClick={async()=>{
                        setConstIP(item.promptText)
                        const response = await axios({
                            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_KEY}`,
                            method: "post",
                            data: {
                                contents: [
                                    { parts: [{ text: item.promptText }] },
                                ],
                            },
                        });
                        const Res = (response.data.candidates[0].content.parts[0].text)
                        
                        let responseArray = Res.split("**");
                        let newArray:any = "";
                        for(let i=0; i < responseArray.length; i++)
                        {
                        if (i=== 0 || i%2 !== 1) {
                        newArray += responseArray[i];
                        } 
                        else{
                        newArray += "<strong>"+ responseArray[i] + "</strong>"
                        }
                        }
                        let newArr2 = newArray.split("*").join("</br>")
                        setTextOutput(newArr2);
                        console.log(newArray)
                
                            await axios.post('https://ai-image-generator-woye.onrender.com/textData',{
                                username: username,
                                input: item.promptText,
                                output: response.data.candidates[0].content.parts[0].text
                             })
                       }}>{item.promptText}</p>
                    </>
                )
              })
           }
        </div>
    )
}

export default RecentText