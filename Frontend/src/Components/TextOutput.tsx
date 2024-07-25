const TextOutput = ({text,textInput})=>{

const username = localStorage.getItem('username')
const logo = username?.slice(0,1)
const userIP = document.getElementById("userIP")?.innerHTML
const aiIP = document.getElementById("aiIP")?.innerHTML
console.log(userIP)
console.log(aiIP)


    return(
        <div className="w-[100%] flex items-center flex-col h-[400px] bg-slate-100 overflow-scroll">
        <div className="w-[70%] mt-5 mb-10">
            <div>
                <div className="flex items-center">
            <p className="w-[40px] h-[40px] rounded-full bg-red-500 text-slate-200 flex justify-center items-center text-[22px]">{logo}</p>
            <p className="ml-2 hidden md:flex">{username}</p>
            </div>
           <p id="userIP" className="mb-5 mt-3">{textInput}</p>
           </div>
           <div>
           <div className="flex items-center">
           <img src="https://t3.ftcdn.net/jpg/04/54/03/20/240_F_454032055_VV7aEPcuSwlrSDosXkxTE75c1Esavdqo.jpg" alt="" className="w-[40px] h-[40px] rounded-full" />
            <p className="ml-2 hidden md:flex">Chat-Gpt</p>
            </div>
           <p id="aiIP" className="transition-all duration-500 ease-in-out mt-3" dangerouslySetInnerHTML={{__html: text}}></p>
           </div>
           </div>
        </div>
    )
}

export default TextOutput

{/*  */}