import { Route,Routes } from "react-router-dom";
import SignUp from "./Routes/Signup";
import Home from "./Routes/Home";
import SignIn from "./Routes/Signin";
import Prompts from "./Routes/Prompts";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route Component={SignUp} path="/"/>
        <Route Component={SignIn} path="/signin"/>        
        <Route Component={Home} path="/home"/>
        <Route Component={Prompts} path="/prompts" />
      </Routes>
    </>
  )
}

export default App

//https://v0.dev/t/B7u4D0wBJUH