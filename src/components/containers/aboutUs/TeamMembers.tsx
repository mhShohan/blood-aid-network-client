import React from 'react';
import { Grid, Typography, Avatar, Stack, Box, Container } from '@mui/material';
import blankImage from '@/assets/blank-profile.png';
import Image from 'next/image';
import SectionTitle from '@/components/UI/SectionTitle';
import boy from '@/assets/team/boy.png';
import gamer from '@/assets/team/gamer.png';
import man from '@/assets/team/man.png';
import profile from '@/assets/team/profile.png';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'MD Mehdi Hasan',
      role: 'Founder',
      image: boy,
    },
    {
      name: 'MH Shohan',
      role: 'Developer',
      image: gamer,
    },
    {
      name: 'Nasim Sheikh',
      role: 'Manager',
      image: man,
    },
    {
      name: 'Rahat Khan',
      role: 'Manager',
      image: profile,
    },
  ];

  return (
    <Stack py={10} bgcolor='rgba(119, 171, 183, 0.2)'>
      <SectionTitle title='Our Team' />
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Stack
                direction='column'
                alignItems='center'
                p={4}
                boxShadow={24}
                borderRadius='1rem'
              >
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
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default TeamMembers;
