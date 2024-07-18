import React from "react";
import Hero from "./Hero";
import Articles from "./Articles";
import AboutPage from "./AboutPage";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function App() {
  return (
      <div className="App">
       <Hero/>
       <Articles/>
       <AboutPage/>
       <Subscribe/>
       <Footer/>   
      </div>
  );
}

export default App;
