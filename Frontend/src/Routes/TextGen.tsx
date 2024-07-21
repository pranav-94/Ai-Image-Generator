const TextGen = ()=>{

    async function query(data:any) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/microsoft/speecht5_tts",
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    
    query({"inputs": "write hello world in js"}).then((response) => {
        console.log(JSON.stringify(response));
    });
    return(
        <>
        
        </>
    )
}

export default TextGen