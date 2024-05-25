import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import aboutImage from '@/assets/about.png';
import SectionTitle from '@/components/UI/SectionTitle';

const AboutSection = () => {
  return (
    <Stack py={6} bgcolor='#77ABB7'>
      <Container>
        <SectionTitle title='About Us' />
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box p={2}>
              <Image
                src={aboutImage}
                alt='About Us'
                width={400}
                height={320}
                style={{ width: '100%', objectFit: 'contain' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box p={2}>
              <Typography variant='body1' m={0} paragraph textAlign='justify'>
                Welcome to BloodAidNetwork, your trusted platform dedicated to facilitating
                life-saving blood donations. Our mission is simple yet profound: to connect those in
                need of blood with compassionate donors swiftly and efficiently. We believe that
                every drop counts and that by uniting donors and recipients, we can create a network
                of hope and support that saves lives every day.
              </Typography>
              <Typography variant='body1' my={1} paragraph textAlign='justify'>
                At BloodAidNetwork, we understand the critical importance of timely blood donations.
                Our platform is designed to make the process seamless, whether you are looking to
                donate blood or need it urgently. By harnessing the power of technology and
                community, we strive to bridge the gap between demand and supply, ensuring that no
                one has to face a blood shortage alone.
              </Typography>

              <p style={{ margin: '5px 0 0 0' }}>
                <strong>Our Mission</strong>
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 1.5rem' }}>
                <li>To provide a reliable and accessible platform for blood donation.</li>
                <li>To raise awareness about the importance of regular blood donations.</li>
                <li>
                  To support hospitals and healthcare providers by ensuring a steady supply of
                  blood.
                </li>
                <li>To create a community of dedicated donors committed to saving lives.</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default AboutSection;
