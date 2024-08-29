import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ section1Ref, section2Ref, section3Ref, section4Ref, section5Ref }) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDropdown = (index) => {
        const setters = [
            setIsOpen1,
            setIsOpen2,
            setIsOpen3,
            setIsOpen4,
            setIsOpen5,
        ];

        const actives = [
            setIsActive1,
            setIsActive2,
            setIsActive3,
            setIsActive4,
            setIsActive5,
        ];

        setters.forEach((setOpen, i) => {
            if (i === index) {
                setOpen((prev) => !prev);
                actives[i]((prev) => !prev);
            } else {
                setOpen(false);
                actives[i](false);
            }
        });
    };

    useEffect(() => {
        if (isOpen1) {
            setTimeout(() => scrollToSection(section1Ref), 300); // Delay the scroll to allow dropdown to expand
        }
    }, [isOpen1]);

    useEffect(() => {
        if (isOpen2) {
            setTimeout(() => scrollToSection(section2Ref), 300);
        }
    }, [isOpen2]);

    useEffect(() => {
        if (isOpen3) {
            setTimeout(() => scrollToSection(section3Ref), 300);
        }
    }, [isOpen3]);

    useEffect(() => {
        if (isOpen4) {
            setTimeout(() => scrollToSection(section4Ref), 300);
        }
    }, [isOpen4]);

    useEffect(() => {
        if (isOpen5) {
            setTimeout(() => scrollToSection(section5Ref), 300);
        }
    }, [isOpen5]);

    const dropdownVariants = {
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 }
    };

    return (
        <div className="w-full h-full bg-black p-1">
            <div className={"w-full h-full bg-black px-2 navbar-inner-border"} >
                <div className={"h-12 w-full"}></div>

                {/* First Dropdown */}
                <div className={`relative mt-2 `}>
                    <button
                        onClick={() => toggleDropdown(0)}
                        className={` flex justify-between items-center p-2 w-full ${isActive1 ? 'text-green-navbar' : 'text-white'}`}
                    >
                        01. EXPLORE
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive1 ? 'rotate-180' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen1 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute bg-black shadow-md  rounded  w-full "
                        style={{ border: "1px solid white" }}
                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Second Dropdown */}
                <div className="relative mt-2" style={{ marginTop: isOpen1 ? '6rem' : '0' }}>
                    <button
                        onClick={() => toggleDropdown(1)}
                        className={`mt-2 text-white md:text-xl flex justify-between items-center p-2 w-full ${isActive2 ? 'text-green-navbar' : 'text-white'}`}
                    >
                        02. AI Bots
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive2 ? 'rotate-180' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen2 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute shadow-md mt-2 rounded  w-full"
                        style={{ border: "1px solid white" }}
                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Third Dropdown */}
                <div className="relative mt-2 md:text-xl " style={{ marginTop: isOpen2 ? '6rem' : '0' }}>
                    <button
                        onClick={() => toggleDropdown(2)}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive3 ? 'text-green-navbar' : 'text-white'}`}
                    >
                        03. Docs
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive3 ? 'rotate-180' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen3 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute shadow-md mt-2 rounded  w-full"
                        style={{ border: "1px solid white" }}
                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Fourth Dropdown */}
                <div className="relative mt-2 md:text-xl" style={{ marginTop: isOpen3 ? '6rem' : '0' }}>
                    <button
                        onClick={() => toggleDropdown(3)}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive4 ? 'text-green-navbar' : 'text-white'}`}
                    >
                        04. Connect
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive4 ? 'rotate-180' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen4 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute  shadow-md mt-2 rounded w-full"
                        style={{ border: "1px solid white" }}
                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>

                {/* Fifth Dropdown */}
                <div className="relative mt-2 md:text-xl" style={{ marginTop: isOpen4 ? '6rem' : '0' }}>
                    <button
                        onClick={() => toggleDropdown(4)}
                        className={`mt-2 text-white flex justify-between items-center p-2 w-full ${isActive5 ? 'text-green-navbar' : 'text-white'}`}
                    >
                        05. Trade
                        <span
                            className={`text-lg transition-transform duration-300 ${isActive5 ? 'rotate-180 ' : ''}`}
                        >
                            ▼
                        </span>
                    </button>
                    <motion.div
                        animate={isOpen5 ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute  shadow-md mt-2 rounded w-full"
                        style={{ border: "1px solid white" }}
                    >
                        <h1 className="text-white block text-center px-4 py-2 ">pages</h1>
                        <h1 className=" text-white text-center block px-4 py-2 hover:bg-gray-900 rounded-lg">pages</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
