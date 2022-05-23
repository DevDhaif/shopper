import React from "react";
import "./index.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const Test = () => {
  let location = useLocation();
  let params = useParams();
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
    console.log(location.pathname);
  };
  return (
    <div>
      <p
        className='text-3xl text-green-800 cursor-pointer'
        onClick={handleNavigate}>
        Home
      </p>
    </div>
  );
};

function App() {
  return (
    <div className=' bg-gray-50'>
      <nav className='flex justify-around w-full px-4 py-8 text-white bg-gray-800 lg:px-20'></nav>
      <div className='px-4 lg:px-12'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
