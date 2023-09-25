import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Login-Register/Landing";
import LandingHome from "./Components/Homepage/LandingHome";
import View from "./Components/Viewpage/View";
import Register from "./Components/Login-Register/Register";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/LoginSuccess" element={<LandingHome />} />
        <Route path="/view/:id" element={<View/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </>
  );
}

export default App;
