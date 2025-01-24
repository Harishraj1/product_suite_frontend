import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const delay = .8; // Lower values increase the delay
        const updateDelayedPosition = () => {
            setDelayedPosition((prev) => ({
                x: prev.x + (mousePosition.x - prev.x) * delay,
                y: prev.y + (mousePosition.y - prev.y) * delay,
            }));
        };

        const interval = setInterval(updateDelayedPosition, 10);
        return () => clearInterval(interval);
    }, [mousePosition]);

    return (
        <>
            {/* Outer circle */}
            <div
                className="inner-circle"
                style={{
                    left: delayedPosition.x,
                    top: delayedPosition.y,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            {/* Inner circle */}
            <div
                className="outer-circle"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
