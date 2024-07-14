
import './App.css';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";




function App() {

 
  return (
    // <div className="App">
    //   {/* 9690e5a6 key   src http://www.omdbapi.com/?i=tt3896198&apikey=9690e5a6 */}


    // </div>
     
      
<>
    


  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
     
        </Route>
      </Routes>
    </BrowserRouter>
  

</>


  );
}



export default App;
