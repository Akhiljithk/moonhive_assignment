import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Tab1 from './Components/Tab1';
import Tab2 from './Components/Tab2';
import TutorioHeader from './Components/TutorioHeader';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="App">
        <TutorioHeader/>
        <NavBar activeTab={setActiveTab}/>
        {activeTab == 1 && <Tab1/>}
        {activeTab == 2 && <Tab2/>}
  
    </div>
  );
}

export default App;
