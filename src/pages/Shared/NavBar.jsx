import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { FaBars } from "react-icons/fa";
import useAuthHook from "../../hooks/useAuthHook";
import { toast } from "react-toastify";
import Logo from "../../components/Logo";

const NavBar = () => {
    const { user, logOut } = useAuthHook();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/");
                toast.success('Logout Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    const navItems = <>
        <li><NavLink className="hover:text-white hover:scale-110 duration-75" to="/">Home</NavLink></li>
        <li><NavLink className="hover:text-white hover:scale-110 duration-75" to="/menu">Our Menu</NavLink></li>
        <li><NavLink className="hover:text-white hover:scale-110 duration-75" to="/order">Order Now</NavLink></li>
        <li><NavLink className="hover:text-white hover:scale-110 duration-75" to="/secret">Secret</NavLink></li>
        {user ?
            <>
                <span>{user.displayName}</span>
                <img src={user.photoURL} alt="User Profile Image" className="h-12 rounded-full" />
                <li onClick={handleLogOut}><NavLink className="hover:text-white hover:scale-110 duration-75" to="/login">LogOut</NavLink></li>
            </> :
            <>
                <li><NavLink className="hover:text-white hover:scale-110 duration-75" to="/login">Login</NavLink></li>
            </>

        }
    </>
    return (
        <>
            <div className="bg-black bg-opacity-50 backdrop-blur text-white fixed top-0 z-10 left-0 right-0">
                <Container>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden text-xl">
                                    <FaBars></FaBars>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
                                    {navItems}
                                </ul>
                            </div>
                            <Logo></Logo>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 gap-x-2">
                                {navItems}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="btn">Button</a>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NavBar;