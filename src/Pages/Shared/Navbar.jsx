import { Link, NavLink } from "react-router-dom";
import logo from "/assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch()
    }
    const navLink = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Service</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        {
            user?.email ?
                <>
                    <li><NavLink to={'/booking'}>Booking</NavLink></li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </>
                : <li><NavLink to={'/login'}>Login</NavLink></li>


        }
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-10">
            <div className="navbar-start">
                <Link to={'/'} className="hidden lg:block">
                    <img src={logo} alt="" />

                </Link>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Link to={'/'}>
                            <img src={logo} alt="" />

                        </Link>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;