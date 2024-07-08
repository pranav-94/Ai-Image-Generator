import Sign from "../Components/SignComp"
import { Link } from "react-router-dom"

const SignIn = ()=>{

    const link = 'signIn'
    return(
        <>
        <p>Sign In page</p>
        <Sign link={link}/>
        <Link to='/'>Don't have an account</Link>
        </>
    )
}

export default SignIn