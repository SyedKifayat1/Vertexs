// // import React from 'react';
// import './team.css';
// // import { Box } from "@mui/material";
// import Button from '@mui/material/Button';
// import Card from "@mui/material/Card";
// import { Typography } from "@mui/material";
// import Images from "../../../gallery/virtual-assistant-team-meetup.webp";

// const Team = () => {
//   return (
//     <div className="team-container">
//       <div></div>
//       <div className="team-card-container">
//         <Card
//           sx={{
//             boxShadow: "none",
//             borderRadius: "10px",
//             p: "25px 20px",
//             mb: "15px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             maxWidth: "100%",
//           }}
//         >


//           <img
//             src={Images}
//             alt="card"
//             style={{
//               borderRadius: '10px',
//               marginBottom: '12px',
//               maxWidth: '100%',
//               height: 'auto',
//             }}
//           />

//           <Typography
//             as="h3"
//             fontWeight="500"
//             fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
//             mb="5px"
//             textAlign="center"
//           >
//             Nesta Technologies
//           </Typography>

//           <Typography
//             fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
//             textAlign="center"
//             px={{ xs: 1, sm: 2 }}
//           >
//             When you enter into any new area of science, you almost always find.
//           </Typography>

//           <a href="#" className="text-decoration-none">
//             <Button
//               sx={{
//                 background: '#EDEFF5',
//                 border: '1px solid #EDEFF5',
//                 borderRadius: '8px',
//                 textTransform: 'capitalize',
//                 p: '5px 15px',
//                 mt: '15px',
//                 fontWeight: '500',
//               }}
//               color="primary"
//             >
//               View Details
//             </Button>
//           </a>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Team;




import './team.css';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Images from "../../../gallery/virtual-assistant-team-meetup.webp";

const Team = () => {
    // Array containing four card data objects
    const cards = Array(4).fill({
        title: "Executive Assistant",
        description:
            "Virtual SDRs boost your digital marketing agency’s lead generation and sales, finding and qualifying clients to grow revenue, with scalable support for your needs.",
        image: Images,
        button: "Hire to Start",
    });

    return (
        <div className="team-container">
            {cards.map((card, index) => (
                <div className="team-card" key={index}>
                    <Card
                        sx={{
                            boxShadow: "none",
                            borderRadius: "10px",
                            p: "25px 20px",
                            mb: "15px",
                            gap: "5px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            maxWidth: "100%",
                        }}
                    >
                        <img
                            src={card.image}
                            alt="card"
                            style={{
                                borderRadius: "10px",
                                marginBottom: "12px",
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                        <Button
                            sx={{
                                background: '#635985',
                                border: '1px solid rgba(117, 127, 239, 0.2)',
                                borderRadius: '25px',
                                color: '#fff',
                                textTransform: 'capitalize',
                                p: '8px 25px',
                                m: '8px',
                                fontSize: '11px',
                            }}
                            className="mr-5px"
                        >
                            {card.button}
                        </Button>
                        <Typography
                            as="h3"
                            fontWeight="500"
                            fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
                            mb="5px"
                            textAlign="center"
                        >
                            {card.title}
                        </Typography>

                        <Typography
                            fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                            textAlign="center"
                            px={{ xs: 1, sm: 2 }}
                        >
                            {card.description}
                        </Typography>

                        <a href="#" className="text-decoration-none">
                            {/* <Button
                                sx={{
                                    background: "#EDEFF5",
                                    border: "1px solid #EDEFF5",
                                    borderRadius: "8px",
                                    textTransform: "capitalize",
                                    p: "5px 15px",
                                    mt: "15px",
                                    fontWeight: "500",
                                }}
                                color="primary"
                            >
                                View Details
                            </Button> */}
                            <div className="hiring-button-container">
                                <button type="button" className="hiring-button">Learn More<i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </a>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Team;
