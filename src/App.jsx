import React from "react";
import Info from "./components/Info";
import About from "./components/About"
import Interest from "./components/Interest"
// import Footer from "./components/Footer"

export default function App() {
return (
        <div className="main-card">
                <Info />
                <div className="about-me">
                   <About />  
                   <Interest />   
                </div>
                
        </div>
)

        

}
