import { Box, Container, Grid, Typography } from '@mui/material';
import Logo from '../UI/Logo';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        p: 6,
        color: 'primary.light',
      }}
      component='footer'
    >
      <Container>
        <Box sx={{ marginLeft: '-.6rem' }}>
          <Logo />
        </Box>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6'>Contact</Typography>
            <Typography variant='body2'>Email: info@blooddonation.com</Typography>
            <Typography variant='body2'>Phone: +1 (555) 123-4567</Typography>
            <Typography variant='body2'>Address: +1 (555) 123-4567</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' gutterBottom>
              Social
            </Typography>
            <Typography variant='body2'>Facebook</Typography>
            <Typography variant='body2'>Twitter</Typography>
            <Typography variant='body2'>Instagram</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' gutterBottom>
              Legal
            </Typography>
            <Typography variant='body2'>Terms of Use</Typography>
            <Typography variant='body2'>Privacy Policy</Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant='body2' align='center'>
            Copyright © Blood Aid Network by MH Shohan @{new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
