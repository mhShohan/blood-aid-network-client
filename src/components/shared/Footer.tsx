import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Logo from '../UI/Logo';
import Link from 'next/link';

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
          <Logo mobile />
        </Box>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6'>Contact</Typography>
            <Typography variant='body2'>Email: mehdihasanshohan17@gmail.com</Typography>
            <Typography variant='body2'>Phone: +8801711111111</Typography>
            <Typography variant='body2'>Address: Gopalganj, Dhaka, Bangladesh</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'left', sm: 'right', md: 'center' }}>
            <Typography variant='h6' gutterBottom>
              Social
            </Typography>
            <Stack direction='column'>
              <Typography
                variant='body2'
                component={Link}
                href='https://www.facebook.com/mhshohan17/'
                target='_blank'
                sx={{ color: 'primary.light' }}
              >
                Facebook
              </Typography>
              <Typography
                variant='body2'
                component={Link}
                href='https://twitter.com/mhShohan25'
                target='_blank'
                sx={{ color: 'primary.light' }}
              >
                Twitter
              </Typography>
              <Typography
                variant='body2'
                component={Link}
                href='https://www.linkedin.com/in/mehdi-hasan-shohan/'
                target='_blank'
                sx={{ color: 'primary.light' }}
              >
                Linkedin
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'left', sm: 'left', md: 'right' }}>
            <Typography variant='h6' gutterBottom>
              Legal
            </Typography>
            <Typography variant='body2'>Terms of Use</Typography>
            <Typography variant='body2'>Privacy Policy</Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant='body2' align='center'>
            Copyright © Blood Aid Network by{' '}
            <a
              href='https://www.linkedin.com/in/mehdi-hasan-shohan/'
              target='_blank'
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              MH Shohan
            </a>{' '}
            @{new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
