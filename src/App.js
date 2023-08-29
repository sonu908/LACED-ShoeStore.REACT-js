import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Login-Register/Landing";
import LandingHome from "./Components/Homepage/LandingHome";
import View from "./Components/Viewpage/View";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/LoginSuccess" element={<LandingHome />} />
        <Route path="/view/:id" element={<View/>} />
      </Routes>
    </>
  );
}

export default App;
