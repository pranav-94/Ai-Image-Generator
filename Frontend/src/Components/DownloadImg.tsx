type ImgMode = {
    img: string,
    mode: boolean
}

const Download:React.FC<ImgMode> = ({img,mode})=>{
    const handleDownload = ()=>{
        const a = document.createElement('a')
        a.href = img 
        a.download = 'downloadImg.jpg'
        console.log(a.href)
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        }
    return(
        <>
        <button className={`rounded-md  w-[150px] h-[35px] mt-5 ${mode===true ? "bg-teal-400 text-slate-900" : "bg-slate-900 text-white"}`} onClick={handleDownload}>Download</button>
        </>
    )
}

export default Download