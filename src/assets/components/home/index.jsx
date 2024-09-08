import { useRef, useState } from 'react';
import './home.css'; // Ensure this CSS file includes the necessary styles
import Banner from "../../gallery/virtual-assistant-team-meetup.webp";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });

    const handleBannerClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleMouseDown = (e) => {
        const modal = modalRef.current;
        if (modal) {
            offset.current = {
                x: e.clientX - modal.getBoundingClientRect().left,
                y: e.clientY - modal.getBoundingClientRect().top,
            };

            const handleMouseMove = (moveEvent) => {
                modal.style.left = `${moveEvent.clientX - offset.current.x}px`;
                modal.style.top = `${moveEvent.clientY - offset.current.y}px`;
            };

            const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
    };

    const [rating, setRating] = useState(4);

    return (
        <div className="home-main">
            <div className="home-details">
                <button className="cta-button">Save on Payroll, Not on Quality</button>
                <p className="main-text">Pre-Trained Virtual Assistants Ready to Fuel Your Digital Marketing Agency’s Growth</p>
                <div className="ratings">
                    <div className="rating-text">EXCELLENT</div>
                    <div className="detials-rating">
                        {[...Array(5)].map((star, index) => {
                            const starIndex = index + 1;
                            if (starIndex === 5) {
                                return (
                                    <span key={index} className="star half-filled">
                                        &#9733; {/* Unicode for star */}
                                    </span>
                                );
                            } else {
                                return (
                                    <span
                                        key={index}
                                        className={`star ${starIndex <= rating ? 'filled' : ''}`}
                                    >
                                        &#9733;
                                    </span>
                                );
                            }
                        })}
                    </div>
                    <div className="review-count">384 reviews</div>
                    <div className="trustindex">
                        <div className="trustindex-icon"><i className="fa-solid fa-check"></i></div>
                        Trustindex
                    </div>
                </div>


                <div className="agency-info">
                    <div className="strategy-session">Agency Scale Strategy Session</div>
                    <div className="explore-roles">Explore Roles</div>
                </div>
            </div>
            <div className="home-video">
                <div className="video-container">
                    {/* <iframe
                        id="video-frame"
                        src="https://www.youtube.com/embed/sQEeFi6k2EY"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video"
                    ></iframe> */}
                    <div className="banner" onClick={handleBannerClick}>
                        <img src={Banner} alt="Banner" className="banner-img" />
                        <div className="play-button">
                            <div>&#9658;</div> {/* Play icon */}
                        </div>
                    </div>
                </div>

                {modalOpen && (
                    <div className="modal-overlay">
                        <div
                            className="modal-content"
                            ref={modalRef}
                            onMouseDown={handleMouseDown}
                        >
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                            <iframe
                                width="800"
                                height="450"
                                src="https://www.youtube.com/embed/sQEeFi6k2EY"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Video Modal"
                            ></iframe>
                        </div>
                    </div>
                )}

                <div className="companies-slider">
                    {/* Add slider content here */}
                </div>
            </div>
        </div>
    );
};

export default Home;
