'use client';

import blankImage from '@/assets/blank-profile.png';
import Loader from '@/components/UI/Loader';
import { TBlood, blood } from '@/constant';
import { useGetMyProfileQuery } from '@/store/api/donor.api';
import { IUser } from '@/types';
import dateFormatter from '@/utils/dateFormatter';
import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);

  if (isLoading) return <Loader />;

  const donor = data.data as IUser;

  return (
    <Stack mx={{ xs: 1, md: 8 }}>
      <Stack py={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Image
              src={donor.userProfile.profilePicture || blankImage}
              alt='Donor Image'
              width={300}
              height={300}
              layout='responsive'
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
              <Box mt={1} ml={1} display='flex' gap={4}>
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
        <Box mt={2} display='flex' gap={1} justifyContent='center'>
          <Link href='/profile/edit'>
            <Button>Edit Profile</Button>
          </Link>
          <Link href='/profile/change-password'>
            <Button>Change Password</Button>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;

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
