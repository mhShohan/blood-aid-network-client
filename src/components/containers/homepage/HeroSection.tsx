import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import heroBanner from '@/assets/hero-banner.png';
import bloodIcon from '@/assets/blood-icon.png';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Stack sx={{ minHeight: '80vh' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} my={2}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              height='100%'
              m={2}
            >
              <SiteName />
              <Typography variant='h5' fontWeight={'600'}>
                Donate Blood and Save Lives...!!!
              </Typography>
              <Typography textAlign={{ xs: 'center', md: 'left' }}>
                Find willing blood donors and save lives, your donation can make a difference today!
              </Typography>
              <Box>
                <Link href='/donor'>
                  <Button>Search Donors</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={heroBanner}
              alt='hero'
              width={600}
              height={600}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default HeroSection;

const SiteName = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{
        display: 'flex',
        fontWeight: 700,
        color: 'inherit',
        marginLeft: '-1rem',
      }}
    >
      <Image src={bloodIcon} alt='Blood Icon' width={80} height={80} />
      <Typography noWrap fontWeight='600' sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
        Blood Aid Network
      </Typography>
    </Stack>
  );
};
