import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing FontAwesome icons
import logo from '../Asset/iHub_Logo.png';
import './Navbar.css'; // Importing the CSS for Navbar

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State for toggling the side menu

    // Function to handle opening and closing the side navigation
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Main navbar container */}
            <div className='navbar'>
                {/* Logo */}
                <img className='logo w-16 cursor-pointer' src={logo} alt='logo' />

                {/* Regular links visible on larger screens */}
                <div className='nav-links'>
                    <p className='nav-link'>Home</p>
                    <p className='nav-link'>About</p>
                    <p className='nav-link'>Product</p>
                    <p className='nav-link'>Contact us</p>
                </div>

                {/* Menu icon visible on smaller screens */}
                <div className='menu-icon' onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>

            {/* Side navigation menu for smaller screens */}
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <div className='close-icon' onClick={toggleMenu}>
                    <FaTimes />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    );
}
