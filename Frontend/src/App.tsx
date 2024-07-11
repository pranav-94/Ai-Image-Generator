import { Route,Routes } from "react-router-dom";
import SignUp from "./Routes/Signup";
import Home from "./Routes/Home";
import SignIn from "./Routes/Signin";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route Component={SignUp} path="/"/>
        <Route Component={SignIn} path="/signin"/>        
        <Route Component={Home} path="/home"/>
      </Routes>
    </>
  )
}

export default App

