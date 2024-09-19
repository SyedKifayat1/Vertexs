// import React from 'react';
import VaPic from "../../../gallery/RepStack-Home-Page-Pic.webp";
import './hiring.css';

const Hiring = () => {
    return (
        <section className="hiring-section">
            <div className="hiring-container">
                <div className="hiring-image-container">
                    <img src={VaPic} alt="Virtual Assistant Ready to Help" className="hiring-image" />
                </div>
                <div className="hiring-content">
                    <h2 className="hiring-title">Tired of The Hiring Gamble?</h2>
                    <h3 className="hiring-subtitle">Imagine scaling without the headache.</h3>
                    <p className="hiring-description">
                        Our virtual assistants are pre-trained and ready to support your digital marketing needs. Trusted by
                        leading agencies, they’re ready to contribute to your success. Whether it’s SEO, content creation, social
                        media management, or analytics, they’re ready to jump in and make a tangible difference in your day-to-day,
                        giving you your time back.
                    </p>
                    <h4 className="hiring-highlight">Did you know virtual assistants …</h4>
                    <div className="hiring-benefits">
                        <div className="benefit-item">
                            <div className="tick-icon">&#10003;</div>
                            <div className="icon-details">Boost Retention</div>
                        </div>
                        <div className="benefit-item">
                            <div className="tick-icon">&#10003;</div>
                            <div className="icon-details">One VA = $300K Gain</div>
                        </div>
                        <div className="benefit-item">
                            <div className="tick-icon">&#10003;</div>
                            <div className="icon-details">Cut Payroll by 60%</div>
                        </div>
                    </div>
                    <div className="hiring-button-container">
                        <button type="button" className="hiring-button">Virtual Assistant Roles</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hiring;
