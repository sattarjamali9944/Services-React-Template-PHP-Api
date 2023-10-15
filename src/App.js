import Index    from "./components/indexpagecomponents/Index";
import About    from "./components/Aboutpagecomponents/AboutPageComponent";
import Services from "./components/servicepagecomponents/ServicePageComponent";
import Gallery from "./components/gallerypagecomponents/GalleryPagecomponents";
import Contact from "./components/contactpagecomponents/ContactPageComponent";
import Login   from "./components/loginpagecomponents/LoginPageComponent";
import Profile from "./components/Profilepagecomponents/ProfilePageComponent";
import Logout  from "./components/Logout";
import Register from "./components/Registerpagecomponents/RegisterPageComponent"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>                                                                       
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>                   
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
       
        <Route path="/logout" element={<Logout />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
         
       
      </Routes>
        
    </>
  );
}

export default App;
