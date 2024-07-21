import { Route,Routes } from "react-router-dom";
import SignUp from "./Routes/Signup";
import Home from "./Routes/Home";
import SignIn from "./Routes/Signin";
import Settings from "./Routes/Settings";
import TextGen from "./Routes/TextGen";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route Component={SignUp} path="/"/>
        <Route Component={SignIn} path="/signin"/>        
        <Route Component={Home} path="/home"/>
        <Route Component={Settings} path="/settings"/>
        <Route Component={TextGen} path="/Text-Generator"/>
      </Routes>
    </>
  )
}

export default App

