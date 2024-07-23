const TextOutput = ({text,textInput})=>{
    return(
        <div className="w-[100%] flex items-center flex-col h-[400px] bg-slate-100 overflow-scroll">
        <div className="w-[70%] mt-5 mb-10">
           <p className="mb-5">{textInput}</p>
           <p dangerouslySetInnerHTML={{__html: text}}></p>
           </div>
        </div>
    )
}

export default TextOutput