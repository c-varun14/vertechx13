"use client"; 

import React from 'react';
import './MegaEventSection.css'; // ← Fixed import path

const MegaEventSection = () => {
    return (
        <div className="mega-event-section">
            <div className="mega-event-container">
                <div className="mega-event-inner">
                    <div className="mega-event-content">
                        <h2 className="mega-event-headline">Looking for the Mega Event?</h2>
                        <p className="mega-event-subheadline">
                            Bring your team mates along and take on the challenge!
                        </p>
                    </div>

                    <div className="mega-event-card">
                        <div className="event-graphic">
                            <div className="hackathon-text">
                                <span className="hackathon-label">HACKATHON</span>
                                <span className="cyberforge-label">CYBERFORGE</span>
                            </div>
                            <div className="graphic-background"></div>
                        </div>

                        <div className="event-details">
                            <h3 className="event-name">8-Hour Software Hackathon</h3>
                            <p className="event-info">19th December, 2024 | MVJ College of Engineering</p>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaEventSection;