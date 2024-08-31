import React from "react";
import "./Progressbar.css"; // Import the styles for the progress bar

const ProgressBar = () => {
    return (
        <div className="progress-overlay">
            <div className="progress-container">
                <div className="text-center fw-bold">Yasir Masood</div>
                
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};

export default ProgressBar;
