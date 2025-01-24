import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import CustomCursor from "./Components/CustomCursor"; // Import CustomCursor

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
                <CustomCursor /> {/* Add the custom cursor */}
            </BrowserRouter>
        </div>
    );
}

export default App;

