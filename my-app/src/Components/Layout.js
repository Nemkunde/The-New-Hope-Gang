import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/CharacterList">Characters</Link>
                </li>  
                <li>
                    <Link to="NoPage"></Link>
                </li>
            </ul>
        </nav>

<Outlet />

</>


    )
};

export default Layout;