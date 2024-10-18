import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);


    // Function to handle outside click
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false); // Close the navbar if the click is outside
        }
    };

    useEffect(() => {
        // Add event listener when the component is mounted
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-blue-600 p-4 fixed top-0 w-full z-50 shadow-lg hover:shadow-xl transition duration-500">
                <div className=" container mx-auto flex justify-between items-center ">
                    <div className="text-white text-2xl font-bold">
                        <a href="/">HR Solutions</a>
                    </div>

                    {/* Menu for larger screens */}
                    <div className="hidden md:flex md:justify-center md:items-center space-x-6">
                        <a href="#about" className="text-white hover:text-gray-300">About</a>
                        <a href="#services" className="text-white hover:text-gray-300">Services</a>
                        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                        <a href="#login" className="text-white hover:text-gray-300">Login</a>
                        <a href="#register" className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100">Register</a>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>


                {isOpen && (
                    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-800 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } md:hidden bg-gray-800 absolute inset-0 z-50 px-2 pt-2 pb-3 space-y-1 sm:px-3`}
                        onClick={() => setIsOpen(!isOpen)}>

                        <div className="md:hidden top-0 right-0 bg-[#fff] py-3 w-[400px] h-[100vh] fixed" onClick={(e) => e.stopPropagation()} ref={navbarRef}>
                            <div className="flex justify-between items-center border-b-2 pb-2 px-5 border-blue-600">
                                <i onClick={() => setIsOpen(!isOpen)} className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
                                <h4 className=" text-blue-600 text-2xl font-bold cursor-pointer" >HR Solutions</h4>
                            </div>
                            <div className="pt-2 pb-3 space-y-1 sm:px-3 px-5 float-end">
                                <ul className="mt-10 mb-10">
                                    <li>
                                        <a href="#about" className="flex text-[18px] justify-end hover:text-blue-600 cursor-pointer">
                                            About
                                        </a>
                                    </li>
                                    <li >
                                        <a href="#services" className="flex text-[18px] justify-end hover:text-blue-600 cursor-pointer">
                                            Services
                                        </a>
                                    </li>
                                    <li >
                                        <a href="#contact" className="flex text-[18px] justify-end hover:text-blue-600 cursor-pointer">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex flex-col ">
                                    <button className="border-[2px] border-blue-600 rounded-[10px] px-6 py-2 text-blue-600 hover:border-blue-600 hover:text-blue-600 text-[18px] font-bold mb-3  cursor-pointer">Login</button>
                                    <button className="border-[2px] bg-blue-600 rounded-[10px] px-6 py-2 text-[#ffff] hover:bg-blue-600 text-[18px] font-bold cursor-pointer"> Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar