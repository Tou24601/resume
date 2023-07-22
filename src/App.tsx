import "bootstrap/dist/css/bootstrap.min.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactHolder from "./components/ContactHolder";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("english");
  const LangContext = createContext(language);
  return (
    //<BrowserRouter>
     /* <Routes>
        <Route path="#about" element={<Home />} />
        <Route path="#portfolio" element={<Portfolio />} />
        <Route path="#education" element={<Education />} />
        <Route path="#experience" element={<Experience />} />
        <Route path="#contact" element={<Contact />} />
      </Routes></BrowserRouter>*/
<div className="app">
        <Header language={language} setLanguage={setLanguage} />
        <ContactHolder language={language} />
        <Home language={language} />
        <Portfolio language={language} />
        <Education language={language} />
        <Experience language={language} />
        <Publications language={language} />       
        </div>
    
  );
}

export default App;
