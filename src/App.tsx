import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
const [language, setLanguage] = useState("english")

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
