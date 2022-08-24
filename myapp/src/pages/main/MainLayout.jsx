import React from 'react';
import Hero from "./Components/Hero";
import About from "./Components/About";
const MainLayout = () => {
    return (
        <div className="container">
            <Hero />
            <div className="vh-100">
                
            </div>
            <About />
        </div>
    )
}
export default MainLayout;