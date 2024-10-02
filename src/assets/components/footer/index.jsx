// import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
// import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
// import Logo from '../../gallery/black_logo1.png';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#f8f9fa', py: 4, px: 2 }}>
//       <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
//         {/* Company Section */}
//         <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
//           <Typography variant="h6" gutterBottom>
//             Company
//           </Typography>
//           <Box>
//             <img src={Logo} alt="Company Logo" style={{ width: '120px', marginBottom: '10px' }} />
//             <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
//               <LocationOn sx={{ mr: 1 }} /> Lahore, Pakistan
//             </Typography>
//             <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
//               <Phone sx={{ mr: 1 }} /> +9230000010
//             </Typography>
//             <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
//               <Email sx={{ mr: 1 }} /> info@vertex.com
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Our Hiring Section */}
//         <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
//           <Typography variant="h6" gutterBottom>
//             Our Hiring
//           </Typography>
//           <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
//             <li>
//               <Link href="#" underline="none" color="inherit">Executive Assistant</Link>
//             </li>
//             <li>
//               <Link href="#" underline="none" color="inherit">Marketing Associate</Link>
//             </li>
//             <li>
//               <Link href="#" underline="none" color="inherit">Sales Development Rep</Link>
//             </li>
//             <li>
//               <Link href="#" underline="none" color="inherit">Account Manager</Link>
//             </li>
//           </Box>
//         </Grid>

//         {/* About Us Section */}
//         <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
//           <Typography variant="h6" gutterBottom>
//             About Us
//           </Typography>
//           <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
//             <li>
//               <Link href="#" underline="none" color="inherit">Careers</Link>
//             </li>
//             <li>
//               <Link href="#" underline="none" color="inherit">Podcast</Link>
//             </li>
//             <li>
//               <Link href="#" underline="none" color="inherit">Blog</Link>
//             </li>
//             <li>
//               <Link href="#" underline="none" color="inherit">FAQs</Link>
//             </li>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Footer Bar */}
//       <Box sx={{ borderTop: '1px solid #ddd', mt: 4, pt: 2 }}>
//         <Grid container justifyContent="space-between" alignItems="center">
//           <Grid item sx={{ textAlign: 'center' }}>
//             <Typography variant="body2" color="textSecondary">
//               Designed & Developed by Evibe Development
//             </Typography>
//           </Grid>
//           <Grid item sx={{ textAlign: 'center' }}>
//             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
//               <IconButton href="#" sx={{color:"#443C68"}}>
//                 <Facebook />
//               </IconButton>
//               <IconButton href="#" sx={{color:"#443C68"}}>
//                 <Twitter />
//               </IconButton>
//               <IconButton href="#" sx={{color:"#443C68"}}>
//                 <LinkedIn />
//               </IconButton>
//               <IconButton href="#" sx={{color:"#443C68"}}>
//                 <Instagram />
//               </IconButton>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import Logo from '../../gallery/black_logo1.png';
import { useMediaQuery, useTheme } from '@mui/material';

const Footer = () => {


  const theme = useTheme();
  
  // Media queries for different screen sizes
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  // const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  // Determine variant based on screen size
  const getVariant = () => {
    if (isXs) return 'h5'; // For extra small screens
    if (isSm) return 'h5'; // For small screens
    // if (isMd) return 'h4'; // For medium screens
    if (isLg) return 'h4'; // For large screens
    return 'h4';           // For extra-large screens
  };
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 3, md: 5 }, px: { xs: 2, md: 4 } }}>
      <Grid container spacing={4} sx={{ justifyContent: {xl:"space-between", xs: 'center', md: 'space-between' }, }}>
        
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
          {/* <Typography variant="h4" gutterBottom> */}
          <Typography variant={getVariant()} gutterBottom>
            Company
          </Typography>
          <Box>
            <img src={Logo} alt="Company Logo" style={{ width: '100px', marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
              <LocationOn sx={{ mr: 1 }} /> Lahore, Pakistan
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1 }} /> +9230000010
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1 }} /> info@vertex.com
            </Typography>
          </Box>
        </Grid>

        {/* Our Hiring Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign:  'center' }}>
          <Typography variant={getVariant()}  gutterBottom>
            Our Hiring
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="#" underline="none" color="inherit">Executive Assistant</Link>
            </li>
            <li>
              <Link href="#" underline="none" color="inherit">Marketing Associate</Link>
            </li>
            <li>
              <Link href="#" underline="none" color="inherit">Sales Development Rep</Link>
            </li>
            <li>
              <Link href="#" underline="none" color="inherit">Account Manager</Link>
            </li>
          </Box>
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center'}}>
          <Typography variant={getVariant()}  gutterBottom>
            About Us
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="#" underline="none" color="inherit">Careers</Link>
            </li>
            <li>
              <Link href="#" underline="none" color="inherit">Podcast</Link>
            </li>
            <li>
              <Link href="#" underline="none" color="inherit">Blog</Link>
            </li>
            <li>
              <Link href="#" underline="none" color="inherit">FAQs</Link>
            </li>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bar */}
      <Box sx={{ borderTop: '1px solid #ddd', mt: 4, pt: 2 }}>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center', order: { xs: 2, sm: 1 } }}>
            <Typography variant="body2" color="textSecondary">
              Designed & Developed by Evibe Development
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center', order: { xs: 1, sm: 2 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <IconButton href="#" sx={{ color: "#443C68" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: "#443C68" }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: "#443C68" }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: "#443C68" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
