import "./globals.css";
import { Routes, Route } from "react-router-dom";
import Home from "@/app/pages/Home" 
import SigninForm from "./app/pages/SigninForm";
import SignupForm from "./app/pages/SignupForm";


const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SigninForm/>} />
        <Route path="/sign-up" element={<SignupForm/>} />
      </Routes>
    </main>
  );
};

export default App;
