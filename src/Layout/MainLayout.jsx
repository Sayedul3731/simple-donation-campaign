import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { createContext, useEffect } from "react"



export const MyContext = createContext('car')
const MainLayout = () => {

    const loc = useLocation()
    useEffect( () => {
        if(loc.pathname === '/'){
            document.title = `Donation - home`
        }else{
            document.title = `Donation ${loc.pathname.replace("/", ' - ')}`
        }
       
    },[loc.pathname])
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