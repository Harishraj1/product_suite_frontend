import bg_img from '../Asset/div.background.png';
import ihub from '../Asset/ihub.png';
import divider from '../Asset/divider.png';
import { useEffect, useState, useRef } from 'react'; // Import hooks for typewriter effect and scrolling
import './Landing.css'; // Import the CSS file for typing animation
import ProductSlider from './ProductSlider';

export default function Landing() {
    // List of words for the typewriter effect
    const phrases = ['AI-Driven Products', 'GenAI Suite'];
    const [text, setText] = useState(''); // Text being displayed
    const [index, setIndex] = useState(0); // Index of current phrase
    const [charIndex, setCharIndex] = useState(0); // Character index
    const [isDeleting, setIsDeleting] = useState(false); // Check if deleting text
    const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed

    // Create a ref for the ProductSlider section
    const productSliderRef = useRef(null);

    // Smooth scrolling function
    const scrollToProductSlider = () => {
        productSliderRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[index];
            if (isDeleting) {
                // Remove characters
                setText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                setTypingSpeed(30); // Increase speed while deleting
            } else {
                // Add characters
                setText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                setTypingSpeed(30); // Slower while typing
            }

            // If finished typing the word, start deleting after a delay
            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Wait 1 sec before deleting
            }

            // If finished deleting the word, move to next word after a delay
            else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((index + 1) % phrases.length); // Move to next phrase
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout); // Cleanup timeout on effect rerun
    }, [charIndex, isDeleting]);

    return (
        <div>
            <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat px-36 flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bg_img})` }}>

                <div className='flex flex-col md:flex-row items-center'>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        {/* animation container for non-mobile screens */}
                        <div className="hidden md:block">
                            <h1 className="mb-10 ml-10 items-start w-fit h-fit bg-white p-1 px-4 border rounded-2xl font-medium bounce-animation bounce-animation-1">
                                AI for Supply Chain
                            </h1>
                        </div>
                        <h1 className="main_heading text-4xl md:text-6xl font-bold">SNS iNNovation Hub</h1>

                        {/* Typewriter effect container */}
                        <h1 className="text-5xl md:text-5xl font-bold mt-4">
                            <span className="typewriter-text">{text}</span> {/* Text that animates */}
                        </h1>

                        <p className="mt-8 text-lg">
                            Our AI-powered platform allows you to seamlessly upload data, ask natural language questions, and visualize trends, distributions, and more with ease.
                        </p>
                        <button className="mt-8 px-6 py-2.5 text-black font-semibold text-lg bg-[#FFCC3E] rounded-full hover:bg-[#fbc329] hover:scale-105 transition-transform duration-200">
                            Explore Products
                        </button>

                        {/* animated container for non-mobile screens */}
                        <div className="hidden md:block">
                            <h1 className="mt-10 ml-96 w-fit h-fit bg-white p-1 px-4 border rounded-2xl font-medium bounce-animation bounce-animation-2">
                                AI-powered Finance
                            </h1>
                        </div>
                    </div>

                    {/* Right Side Image container, removed for mobile */}
                    <div className="hidden md:flex w-1/2">
                        {/* animation container */}
                        <div>
                            <h1 className="w-fit h-fit bg-white p-1 px-4 border rounded-2xl font-medium bounce-animation bounce-animation-3">
                                AI-powered Engines
                            </h1>
                        </div>
                        <img className="w-[60%]" src={ihub} alt="iHub" />
                    </div>
                </div>

                {/* Divider Image at Bottom Center */}
                <div className="absolute mb-10">
                    <img className="w-16 cursor-pointer bounce-animation bounce-animation-4" src={divider} alt="divider" onClick={scrollToProductSlider} />
                </div>
            </div>

            {/* Add the ProductSlider below the main content */}
            <div ref={productSliderRef}>
                <ProductSlider />
            </div>
        </div>
    );
}

