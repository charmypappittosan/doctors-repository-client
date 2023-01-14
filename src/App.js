import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import Navbar from './Pages/Homepage/Navbar/Navbar';
import About from './Pages/Homepage/About/About'
import Login from './Pages/Authentication/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Authentication/Signup';
import RequireAuth from './Pages/Authentication/Login/RequireAuth';
  import { ToastContainer} from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;               
