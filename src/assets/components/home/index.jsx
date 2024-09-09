import { useRef, useState } from 'react';
import './home.css'; // Ensure this CSS file includes the necessary styles
import Banner from "../../gallery/virtual-assistant-team-meetup.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Company1 from "../../gallery/companies/company-1.webp";
import Company2 from "../../gallery/companies/company-3.webp";
import Company3 from "../../gallery/companies/company-4.webp";
import Company4 from "../../gallery/companies/company-5.webp";
import Company5 from "../../gallery/companies/company-6.webp";
import Company6 from "../../gallery/companies/company-7.webp";
import Company7 from "../../gallery/companies/company-2.webp";

import { Autoplay } from 'swiper/modules';

const Home = () => {
    const companyImages = [
        Company1,
        Company2,
        Company3,
        Company4,
        Company5,
        Company6,
        Company7,
        Company2,  // Repeat Company2 if you want to alternate or loop it again
        Company4,  // You can alternate however you'd like
        Company1   // Continue alternating
    ];
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
                                        className={`star ${starIndex <= 4 ? 'filled' : ''}`}
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
                    <Swiper

                        spaceBetween={10} // Space between slides
                        slidesPerView={5} // Show 4 slides at a time
                        autoplay={{
                            delay: 0, // No delay, continuous effect
                            disableOnInteraction: false,
                        }}
                        speed={5000} // Transition speed, smooth sliding
                        loop={true} // Infinite loop
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {/* <SwiperSlide><img src={Banner} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 2" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 3" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 4" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 5" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 6" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 7" /></SwiperSlide>
                        <SwiperSlide><img src={Banner} alt="Slide 8" /></SwiperSlide> */}
                        {companyImages.map((company, index) => (
                            <SwiperSlide key={index}>
                                <img src={company} alt={`Company ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};


export default Home;

