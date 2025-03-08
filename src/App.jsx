import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";

function App() {
  const[activeTab, setActiveTab] = useState("about");

  function handleTabClick(tab){
    setActiveTab(tab);
  }

  return (
    <div className="bg-black min-h-screen px-24 relative">
      <Header onClick={handleTabClick} activeTab={activeTab}/>
      <main>
        <About/>
      </main>
    </div>
  )
}

export default App
