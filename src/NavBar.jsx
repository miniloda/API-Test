import {useState, useEffect} from 'react';

const NavBar = () => {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        if (collapse) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
    }, [collapse]);
    return (
        <nav className = "w-screen bg-white fixed top-0 z-50 shadow-md" >
            
        </nav>
    )
}