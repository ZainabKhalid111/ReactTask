import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MyForm from "./Pages/Form/MyForm";
import Navbar from "./Components/Navbar";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path = '/form' element = {<MyForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
