
import Header from './pages/main/Components/Header';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
   )}
export default Layout;
