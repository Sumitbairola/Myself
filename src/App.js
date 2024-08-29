import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;

