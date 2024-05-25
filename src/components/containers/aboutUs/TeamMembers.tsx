import React from 'react';
import { Grid, Typography, Avatar, Stack, Box, Container } from '@mui/material';
import blankImage from '@/assets/blank-profile.png';
import Image from 'next/image';
import SectionTitle from '@/components/UI/SectionTitle';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'MD Mehdi Hasan',
      role: 'Founder',
      image: null,
    },
    {
      name: 'MH Shohan',
      role: 'Developer',
      image: null,
    },
  ];

  return (
    <Stack py={10} bgcolor='#77ABB7'>
      <SectionTitle title='Our Team' />
      <Container maxWidth='sm'>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box p={4} boxShadow={24}>
                <Box width={200} height={200} mb={2} textAlign='center'>
                  <Image
                    src={member.image || blankImage}
                    alt={member.name}
                    width={200}
                    height={200}
                    style={{ objectFit: 'contain', borderRadius: '10px' }}
                  />
                </Box>
                <Typography textAlign='center' variant='h6' fontWeight='800'>
                  {member.name}
                </Typography>
                <Typography textAlign='center' variant='body1'>
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default TeamMembers;
