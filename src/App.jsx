import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const[activeTab, setActiveTab] = useState("about");

  function handleTabClick(tab){
    setActiveTab(tab);
  }

  return (
    <div className="bg-black min-h-screen px-[10%] relative cursor-default">
      <Header onClick={handleTabClick} activeTab={activeTab}/>
      <main>
        <About/>
        <Skills/>
        <Experience/>
        <Education/>
      </main>
    </div>
  )
}

export default App
