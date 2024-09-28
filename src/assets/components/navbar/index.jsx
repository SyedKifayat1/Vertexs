import { useState,useEffect } from 'react';
import "./navbar.css";
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event to detect when to make the nav sticky
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1130) {
                setSidebarVisible(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Initial check to hide sidebar if already greater than 1130px
        handleResize();

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <div className="bottom-nav" 
            style={{
                position: isSticky ? 'fixed' : 'relative', // Change position based on scroll
                top: isSticky ? 0 : 'auto', // Stick to the top when scrolled
                zIndex: 1000, // Ensure it's above other content
                backgroundColor: '#f4f2f8', // Light purple background
                boxShadow: isSticky ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow when sticky
                transition: 'box-shadow 0.3s ease', // Smooth transition of the shadow
                width: '100%', // Make it take full width of the viewport
                left: 0, // Ensure it sticks to the left side
              }}
            >
                <div className="logo-nav">
                    <a href="#">
                        <div className="nav-logo"></div>
                    </a>
                </div>

                {/* Sidebar: Toggles between 'show' and 'hide' based on sidebarVisible state */}
                <div className={`side-bar ${sidebarVisible ? 'show' : 'hide'}`}>
                    <div className='side-bar-link'>
                        <a href="#">How it works</a>
                    </div>
                    <div className='side-bar-link'>
                        <a href="#">Careers</a>
                    </div>
                    <div className='side-bar-link'>
                        <a href="#">Our Roles</a>
                    </div>
                    <div className={`side-bar-last-btn ${sidebarVisible ? 'side-bar-link' : ''}`}>
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
