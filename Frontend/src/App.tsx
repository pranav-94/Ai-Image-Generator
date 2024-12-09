import { Route,Routes } from "react-router-dom";
import SignUp from "./Routes/Signup";
import Home from "./Routes/Home";
import SignIn from "./Routes/Signin";
import Settings from "./Routes/Settings";
import TextGen from "./Routes/TextGen";
import Landing from "./Routes/Landing";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route Component={SignUp} path="/signup"/>
        <Route Component={SignIn} path="/signin"/>
        <Route Component={Landing} path="/"/>   
        { 
          //@ts-ignore
        <Route Component={Home} path="/home"/>
        }
        <Route Component={Settings} path="/settings"/>
        {
        //@ts-ignore
        <Route Component={TextGen} path="/Text-Generator"/>
}
      </Routes>
    </>
  )
}

export default App

