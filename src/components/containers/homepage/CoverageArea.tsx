import blankImage from '@/assets/blank-profile.png';
import bog from '@/assets/city/bog.png';
import kus from '@/assets/city/kus.png';
import natore from '@/assets/city/natore.png';
import pabna from '@/assets/city/pabna.png';
import raj from '@/assets/city/raj.png';
import sir from '@/assets/city/sir.png';
import SectionTitle from '@/components/UI/SectionTitle';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const CoverageArea = () => {
  const coverageArea = [
    {
      name: 'Rajshahi',
      image: raj,
    },
    {
      name: 'Pabna',
      image: pabna,
    },
    {
      name: 'Sirajganj',
      image: sir,
    },
    {
      name: 'Natore',
      image: natore,
    },
    {
      name: 'Kustia',
      image: kus,
    },
    {
      name: 'Bogura',
      image: bog,
    },
  ];

  return (
    <Stack py={10} bgcolor='rgba(119, 171, 183,.15)'>
      <SectionTitle title='Coverage Area' />
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {coverageArea.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack
                direction='column'
                p={2}
                borderRadius='1rem'
                alignItems='center'
                boxShadow={24}
                bgcolor='#fff'
              >
                <Box textAlign='center' borderRadius='1rem'>
                  <Image
                    src={member.image || blankImage}
                    alt={member.name}
                    width={400}
                    height={200}
                    style={{ width: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                  />
                </Box>
                <Typography textAlign='center' variant='h4' fontWeight='800'>
                  {member.name}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CoverageArea;
