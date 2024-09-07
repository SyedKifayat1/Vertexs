import React, { useState } from 'react';
import "./navbar.css";
const Navbar = () => {


    return (
        <div className="main_navbar">
            <div className="top-bar">
                <div className="nav-social-links">
                    <div>
                        <a href="">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                <div className="nav-text-links">
                    <div>
                        <a href="">FAQS</a>
                    </div>
                    <div>
                        <a href="">Podcast</a>
                    </div>
                    <div>
                        <a href="">Blogs</a>
                    </div>
                    <div>
                        <a href="">+9230000000</a>
                    </div>
                </div>
            </div>
            <div className="bottom-nav">
                <div className="logo-nav">
                    <a href=""><div className="nav-logo"></div></a>
                </div>
                <div className="side-bar">
                    <div>
                        <a href="">How it works</a>
                    </div>
                    <div>
                        <a href="">Careers</a>
                    </div>
                    <div>
                        <a href="">Our Roles</a>
                    </div>
                    <div className="side-bar-last-btn">
                        <a href="">Agency Scale Strrategy Call</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
