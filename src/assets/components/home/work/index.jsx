
// import React, { useState } from 'react';
// import { Box, Typography, Switch } from '@mui/material';
// import "./work.css";
// const CenteredSwitchComponent = () => {
//     const [checked, setChecked] = useState(false);

//     const handleChange = (event) => {
//         setChecked(event.target.checked);
//     };

//     return (
//         <div className="work">
//             <div className="work-title">
//                 <h2 style={{ fontSize: '2.5rem', color: '#443C68', margin: '20px', textAlign: "center" }}>How It Works</h2>
//             </div>
//             <div className="work-details">
//                 <Box display="flex" justifyContent="center" alignItems="center">
//                     <Box
//                         display="flex"
//                         alignItems="center"
//                         gap={3}
//                         p={2}
//                         sx={{
//                             background: '#f4f4f9',
//                             borderRadius: '15px',
//                             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                         }}
//                     >
//                         {/* Left text: Marketing Agencies */}
//                         <Typography
//                             variant="body1"
//                             sx={{
//                                 color: checked ? '#757575' : '#000000',
//                                 fontWeight: checked ? 500 : 700,
//                                 transition: 'color 0.3s ease, font-weight 0.3s ease',
//                                 fontSize: '1.2rem',
//                             }}
//                         >
//                             Marketing Agencies
//                         </Typography>

//                         <Switch
//                             checked={checked}
//                             onChange={handleChange}
//                             sx={{
//                                 width: 100,
//                                 height: 60,
//                                 borderRadius: '25px',
//                                 '& .MuiSwitch-switchBase': {
//                                     padding: 2,
//                                     '&.Mui-checked': {
//                                         transform: 'translateX(40px)',
//                                         color: '#ffffff',
//                                         '& + .MuiSwitch-track': {
//                                             opacity: 1,
//                                             backgroundColor: '#4caf50',
//                                         },
//                                     },
//                                 },
//                                 '& .MuiSwitch-track': {
//                                     backgroundColor: '#4caf50',
//                                     opacity: 1,
//                                     borderRadius: '25px',
//                                 },
//                                 '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//                                     backgroundColor: '#4caf50',
//                                     opacity: 1,
//                                 },
//                                 '& .MuiSwitch-thumb': {
//                                     width: 28,
//                                     height: 28,
//                                     borderRadius: '50%',
//                                     background: 'linear-gradient(145deg, #ffffff, #e0e0e0)',
//                                 },
//                             }}
//                         />

//                         {/* Right text: Hiring Process */}
//                         <Typography
//                             variant="body1"
//                             sx={{
//                                 color: checked ? '#000000' : '#757575',
//                                 fontWeight: checked ? 700 : 500,
//                                 transition: 'color 0.3s ease, font-weight 0.3s ease',
//                                 fontSize: '1.2rem',
//                             }}
//                         >
//                             Hiring Process
//                         </Typography>
//                     </Box>
//                 </Box>
//                 <div className="extra-sections">
//                     <div className="card">
//                         <div className="card-header">
//                             <div className="icon">📞</div>
//                             <div className="title">Discovery Call</div>
//                         </div>
//                         <div className="description">
//                             We get your candidate requirements and send you a customized job description.
//                         </div>
//                     </div>

//                     <div className="card">
//                         <div className="card-header">
//                             <div className="icon">📝</div>
//                             <div className="title">Job Posting</div>
//                         </div>
//                         <div className="description">
//                             We advertise your job on top platforms and manage the entire hiring process.
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default CenteredSwitchComponent;


import React, { useState } from 'react';
import { Box, Typography, Switch } from '@mui/material';
import './work.css';

// Sample data with 5 true and 5 false items
const data = [
  {
    title: 'Customized Job Description',
    description: "We create a job description that fits your candidate's skills and experience.",
    icon: '📞',
    side: true,
  },
  {
    title: 'Candidate Sourcing',
    description: 'We source top candidates from a vast network tailored to your needs.',
    icon: '🔍',
    side: true,
  },
  {
    title: 'Interview Scheduling',
    description: 'We schedule interviews with shortlisted candidates at your convenience.',
    icon: '📅',
    side: true,
  },
  {
    title: 'Skills Assessment',
    description: 'We conduct thorough skills assessments to ensure candidate compatibility.',
    icon: '📝',
    side: true,
  },
  {
    title: 'Onboarding Assistance',
    description: 'We assist with onboarding, ensuring new hires are ready from day one.',
    icon: '📋',
    side: true,
  },
  {
    title: 'Job Posting Management',
    description: 'We manage job postings across multiple platforms to attract the best talent.',
    icon: '🖥️',
    side: false,
  },
  {
    title: 'Background Checks',
    description: 'We perform background checks to ensure the integrity of potential hires.',
    icon: '🔒',
    side: false,
  },
  {
    title: 'Offer Negotiation',
    description: 'We assist in offer negotiation to ensure a smooth hiring process.',
    icon: '🤝',
    side: false,
  },
  {
    title: 'Feedback Collection',
    description: 'We gather feedback from both candidates and employers to improve processes.',
    icon: '🗣️',
    side: false,
  },
  {
    title: 'Continuous Support',
    description: 'We provide ongoing support to ensure long-term success with your new hires.',
    icon: '🔧',
    side: false,
  },
];

const CenteredSwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Filter data based on the `checked` value
  const filteredData = data.filter((item) => item.side === checked);

  return (
    <div className="work">
      <div className="work-title">
        <h2 style={{ fontSize: '2.5rem', color: '#443C68', margin: '20px', textAlign: 'center' }}>
          How It Works
        </h2>
      </div>
      <div className="work-details">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            gap={3}
            p={2}
            sx={{
              background: '#f4f4f9',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Left text: Marketing Agencies */}
            <Typography
              variant="body1"
              sx={{
                color: checked ? '#757575' : '#000000',
                fontWeight: checked ? 500 : 700,
                transition: 'color 0.3s ease, font-weight 0.3s ease',
                fontSize: '1.2rem',
              }}
            >
              Marketing Agencies
            </Typography>

            <Switch
              checked={checked}
              onChange={handleChange}
              sx={{
                width: 100,
                height: 60,
                borderRadius: '25px',
                '& .MuiSwitch-switchBase': {
                  padding: 2,
                  '&.Mui-checked': {
                    transform: 'translateX(40px)',
                    color: '#ffffff',
                    '& + .MuiSwitch-track': {
                      opacity: 1,
                      backgroundColor: '#4caf50',
                    },
                  },
                },
                '& .MuiSwitch-track': {
                  backgroundColor:'#4caf50' ,
                  opacity: 1,
                  borderRadius: '25px',
                  transition: 'background-color 0.3s ease',
                },
                '& .MuiSwitch-thumb': {
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #ffffff, #e0e0e0)',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            />

            {/* Right text: Hiring Process */}
            <Typography
              variant="body1"
              sx={{
                color: checked ? '#000000' : '#757575',
                fontWeight: checked ? 700 : 500,
                transition: 'color 0.3s ease, font-weight 0.3s ease',
                fontSize: '1.2rem',
              }}
            >
              Hiring Process
            </Typography>
          </Box>
        </Box>

        {/* Map through filtered data */}
        <div className="extra-sections">
          {filteredData.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
              </div>
              <div className="description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenteredSwitchComponent;
