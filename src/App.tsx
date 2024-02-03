import "./globals.css";
import { Routes, Route } from "react-router-dom";
import Home from "@/app/pages/Home" 

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </main>
  );
};

export default App;