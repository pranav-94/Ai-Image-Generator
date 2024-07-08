import { Link } from "react-router-dom"
import Sign from "../Components/SignComp"

const SignUp = ()=>{

    const link = 'signUp'
    return(
        <>
        <p>Sign up page</p>
        <Sign link={link}/>
        <Link to='/signIn'>Already have an account?</Link>
        </>
    )
}

export default SignUp