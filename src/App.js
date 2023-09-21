import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User/Users";
import Error from "./pages/Error"
import Users from "./pages/User"
import Navbar  from "./components/Navbar/Navbar";

function App() {
  return (
   
    <BrowserRouter>
       <Navbar />

   <Routes>
   <Route path="/" element={<Home />} /> 
  
   <Route path="/user" element={<User />} /> 
   <Route path="/about" element={<About />} /> 
   <Route path="/contact" element={<Contact />} /> 
   <Route path="users/:name" element={<Users />} />
   <Route path="*" element={<Error />} />
  


   </Routes>
   
   </BrowserRouter>
 
  )
}

export default App
