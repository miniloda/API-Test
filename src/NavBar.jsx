import {useState, useEffect} from 'react';

const NavBar = (props) => {
    const [collapse, setCollapse] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        if (props.screenSize < 500){
            console.log("?")
            setCollapse(true);
            setOpenNav(false);
        }
        if (collapse) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
    }, [collapse, props]);
    return (
        <nav className = "w-screen h-auto bg-black fixed top-0 z-50 shadow-md p-2" >
            <div className = "m-2">
                <p className = "p-2 text-white">
                    asd
                </p>
            </div>
        </nav>
    )
}
export default NavBar;