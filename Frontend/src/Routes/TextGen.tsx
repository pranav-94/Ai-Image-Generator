import axios from 'axios';
import {useState} from 'react'
import Navbar from '../Components/Navbar';
import NavItems from '../Components/NavItemsMobile';
import TextOutput from '../Components/TextOutput';
import Mode from '../Components/Mode';
import {useRecoilValue} from 'recoil'
import { modeAtom } from '../Recoil/atoms';

const TextGen = ()=>{
    const [click,setClick] = useState(false)
    const [input, setInput ] = useState('')
    const [textOutput,  setTextOutput]:any = useState("")
    const [constIP,setConstIP] = useState('')
    const mode = useRecoilValue(modeAtom)
    const GEMINI_KEY = import.meta.env.REACT_APP_GEMINI_API_KEY
    const username = localStorage.getItem('username')

    async function generateAnswer() {
        console.log("loading..");
        setConstIP(input)
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_KEY}`,
            method: "post",
            data: {
                contents: [
                    { parts: [{ text: input }] },
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

            await axios.post('http://localhost:3000/textData',{
                username: username,
                input: input,
                output: response.data.candidates[0].content.parts[0].text
             })
        }
        
          const handleNav=()=>{
            setClick(!click)
         }

    return(
        <>
            <div className={`${mode===true? 'bg-slate-800 text-slate-100' : 'bg-slate-100 text-slate-900'} md:w-[100%] md:flex`}>
    <Navbar mode={mode}/>
  <div className= {`md:w-[75%] flex flex-col sticky top-0 md:h-[587px] `}>
  <div >
   <div className="w-[100%] h-[100px] flex justify-between items-center ">
      <p className="md:ml-[100px] ml-[30px]">Ai TExt Generator</p>
      <div className="flex ">
       <Mode/>
      <p onClick={handleNav} className="md:hidden  mr-[30px]">Menu</p>

      </div>
   </div >
   {
            click===true ? <NavItems/> : <></>
     }
   <div id='Hello'>
    <TextOutput text={textOutput} textInput={constIP}/>
 <div className='flex justify-center'>
    <input className='w-[80%] h-[40px] pl-2 rounded-full bg-slate-400 outline-none' type="text" onChange={(e)=>{
      setInput(e.target.value)
    }} placeholder='Message here'/>
    <button className='w-[50px] ml-2 h-[40px] md:w-[55px] bg-slate-800 text-white rounded-full' onClick={generateAnswer}>click</button>
    </div>
   </div>
  </div>
  </div>
  </div>
        </>
    )
}

export default TextGen