import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/cogent-logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return ( 
        <nav className="absolute top-0 left-0 right-0 z-20 px-4 py-6 md:px-16">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">                
                    <img src={Logo} alt="Cogent Solutions Logo" className="h-8 md:h-10" />
                </div>
                                
                <div className="hidden md:flex space-x-8">
                    <a href="#event-overview" className="text-white hover:text-gray-300 transition-colors">Event Overview</a>
                    <a href="#agenda" className="text-white hover:text-gray-300 transition-colors">Agenda</a>
                </div>
                                
                <div className="hidden md:block">
                    <button className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 hover:cursor-pointer transition-colors"
                        onClick={() => window.location.href = "#register"}
                    >
                        Register
                    </button>
                </div>
                                
                <button 
                    className="md:hidden text-white focus:outline-none" 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>
            
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-primary bg-opacity-80 rounded p-4">
                    <div className="flex flex-col space-y-4">
                        <a href="#event-overview" className="text-white hover:text-gray-300 transition-colors">Event Overview</a>
                        <a href="#agenda" className="text-white hover:text-gray-300 transition-colors">Agenda</a>
                        <button className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition-colors w-full mt-2"
                            onClick={() => window.location.href = "#register"}
                        >
                            Register
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
 
export default Navbar;