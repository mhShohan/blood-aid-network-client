import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import blankImage from '@/assets/blank-profile.png';
import { config } from '@/utils/config';
import { IUser } from '@/types';
import { TBlood, blood } from '@/constant';
import dateFormatter from '@/utils/dateFormatter';
import Contact from './Contact';

const DonorDetailsPage = async ({ params }: { params: { donorId: string } }) => {
  const res = await fetch(`${config.baseUrl}/donor-list/${params.donorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await res.json();
  const donor = data.data as IUser;

  return (
    <Container maxWidth='lg'>
      <Stack py={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Image
              src={donor.userProfile.profilePicture || blankImage}
              alt='Donor Image'
              width={300}
              height={300}
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Stack direction='column' justifyContent='center' height='100%'>
              <InfoBox name='Name' value={donor.name} />
              <InfoBox name='Username' value={donor.username} />
              <InfoBox name='Email' value={donor.email} />
              <InfoBox name='Status' value={donor.status} />
              <InfoBox name='Blood Group' value={blood[donor.bloodType as TBlood]} />
              <InfoBox name='Location' value={donor.location} />
              <InfoBox
                name='Date Of Birth'
                value={dateFormatter.stringToMonth(donor.userProfile.dateOfBirth)}
              />
              <InfoBox
                name='Last Donation Date'
                value={dateFormatter.stringToMonth(donor.userProfile.lastDonationDate)}
              />
              <Box mt={1} display='flex' gap={4}>
                <Chip
                  label={donor.availability ? 'Available' : 'Not Available'}
                  color={donor.availability ? 'success' : 'error'}
                  variant='filled'
                  sx={{ padding: '0.5rem 2rem' }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack py={2} pb={5}>
        <Container maxWidth='xs'>
          <Stack boxShadow={24} p={3}>
            <Typography variant='h5' fontWeight={700} mb={2} textAlign='center'>
              Contact With donor
            </Typography>
            <Contact donorId={params.donorId} />
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default DonorDetailsPage;

const InfoBox = ({ name, value }: { name?: string; value?: string }) => {
  return (
    <Box display='flex' px={1}>
      <Typography variant='h6' fontWeight={700} sx={{ flex: 1 }}>
        {name}
      </Typography>
      <Typography fontWeight={400} flex={2}>
        {value}
      </Typography>
    </Box>
  );
};
