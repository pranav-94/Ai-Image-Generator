// import { useState } from "react"

// const GenImg = ({input})=>{

//     const [img ,setImg ] = useState('')
//     const [input,setInput] = useState('')
//     const [loading, setLoading] = useState(false)

//     const apiKey = import.meta.env.REACT_APP_API_KEY
//     const apiURL = import.meta.env.REACT_APP_API_URL

//     const handleClick=async()=>{
//         setLoading(true)
//         async function query(data:any) {
//           const response = await fetch(
//             `${apiURL}`,
//             {
//               headers: {
//                 Authorization: "Bearer "+`${apiKey}`,
//                 "Content-Type": "application/json",
//               },
//               method: "POST",
//               body: JSON.stringify(data),
//             }
//           );
//           const result = await response.blob();
//           return result;
//         }
//         query({"inputs": input}).then(async(response) => {
//           const imgUrl = URL.createObjectURL(response)
//           setImg(imgUrl)
//           setLoading(false)
//           console.log(response)
//         });
//       }

//     return(
//         <>
           
//         </>
//     )
// }

// export default GenImg