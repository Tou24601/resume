import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";
import Header from "./components/Header";
import ContactHolder from "./components/ContactHolder";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("english");
  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <ContactHolder language={language} />
      <About language={language} />
      <Portfolio language={language} />
      <Education language={language} />
      <Experience language={language} />
      <Publications language={language} />
    </div>
  );
}

export default App;
