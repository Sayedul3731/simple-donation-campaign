import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { createContext } from "react"

export const MyContext = createContext('car')
const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <MyContext.Provider value='car'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </MyContext.Provider>
        </div>
    );
};

export default MainLayout;