import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-5">
            <Logo></Logo>
            <ul className="flex gap-5">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                        }
                    >
                        donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-medium underline" : ""
                        }
                    >
                        statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;