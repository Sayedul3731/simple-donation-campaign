import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <h1 className="text-2xl font-semibold mb-5">Oops!!!</h1>
            <NavLink to="/"><button
                className="middle none center rounded-lg bg-[#FF444A] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
            >
                Button
            </button></NavLink>
        </div>
    );
};

export default ErrorPage;