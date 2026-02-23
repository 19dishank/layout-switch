import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" w-full bg-white border-t border-gray-100 py-4 z-50">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

                <div className="font-medium text-blue-600">
                    © {new Date().getFullYear()} Brand
                </div>


                <div className="flex space-x-6 mt-2 md:mt-0">
                    <NavLink to="/" className="hover:text-blue-600 transition-colors">Guest</NavLink>
                    <NavLink to="/user" className="hover:text-blue-600 transition-colors">User</NavLink>
                    <NavLink to="/admin" className="hover:text-blue-600 transition-colors">Admin</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
