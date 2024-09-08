import { useState } from 'react';
import "./navbar.css";
const Navbar = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <div className="main_navbar" >
            <div className="top-bar">
                <div className="nav-social-links">
                    <div>
                        <a href="">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="fa-brands fa-tiktok"></i>
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
                        <a href="">+923000000000</a>
                    </div>
                </div>
            </div>
            <div className="bottom-nav" >
                <div className="logo-nav">
                    <a href="#">
                        <div className="nav-logo"></div>
                    </a>
                </div>

                {/* Sidebar: Toggles between 'show' and 'hide' based on sidebarVisible state */}
                <div className={`side-bar ${sidebarVisible ? 'show' : 'hide'}`}>
                    <div>
                        <a href="#">How it works</a>
                    </div>
                    <div>
                        <a href="#">Careers</a>
                    </div>
                    <div>
                        <a href="#">Our Roles</a>
                    </div>
                    <div className="side-bar-last-btn">
                        <a href="#">Agency Scale Strategy Call</a>
                    </div>
                    <div>
                        <div className="nav-social-links side-bar-social-links">
                            <div>
                                <a href="">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toggler button: Changes icon based on sidebar visibility */}
                <div className="nav-toggler" onClick={toggleSidebar}>
                    {sidebarVisible ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Navbar;
