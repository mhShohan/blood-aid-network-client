import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import blankProfile from '@/assets/blank-profile.png';
import { IUser } from '@/types';
import { TBlood, blood } from '@/constant';
import Link from 'next/link';

const SingleDonor = ({ donor }: { donor: IUser }) => {
  return (
    <Grid item key={donor.id} xs={12} md={6} lg={4} p={1}>
      <Link href={`/donor/${donor.id}`} style={{ color: 'initial', textDecoration: 'none' }}>
        <Stack
          sx={{
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: 10,
          }}
          alignItems='center'
        >
          <Box maxWidth={300} maxHeight={300}>
            <Image
              src={donor?.userProfile.profilePicture || blankProfile}
              alt={donor?.name}
              width={300}
              height={300}
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box my={2} width={'100%'} textAlign='center'>
            <Typography variant='h6' fontWeight={400} sx={{ lineHeight: '1.2' }}>
              <Typography component='span' fontWeight={800} variant='h6'>
                Name:{' '}
              </Typography>{' '}
              {donor.name}
            </Typography>

            <Typography variant='h6' fontWeight={400} sx={{ lineHeight: '1.2' }}>
              <Typography component='span' fontWeight={800} variant='h6'>
                Location:{' '}
              </Typography>{' '}
              {donor.location}
            </Typography>
            <Typography variant='h6' fontWeight={400} sx={{ lineHeight: '1.2' }}>
              <Typography component='span' fontWeight={800} variant='h6'>
                Blood Group:{' '}
              </Typography>{' '}
              {blood[donor.bloodType as TBlood]}
            </Typography>

            <Box mt={1}>
              <Chip
                label={donor.availability ? 'Available' : 'Not Available'}
                color={donor.availability ? 'success' : 'error'}
                variant='filled'
                sx={{ padding: '0.5rem 2rem' }}
              />
            </Box>
          </Box>
        </Stack>
      </Link>
    </Grid>
  );
};

export default SingleDonor;
