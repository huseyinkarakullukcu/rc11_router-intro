import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
