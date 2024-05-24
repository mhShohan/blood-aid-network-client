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
        >
          <Box>
            <Image
              src={donor?.userProfile.profilePicture || blankProfile}
              alt={donor?.name}
              width={200}
              height={200}
              layout='responsive'
              style={{
                borderRadius: '8px',
              }}
            />
          </Box>
          <Box my={1}>
            <Typography variant='h6' sx={{ lineHeight: '1.2' }}>
              <strong>Name: </strong> {donor.name}
            </Typography>
            <Typography variant='h6' sx={{ lineHeight: '1.2' }}>
              <strong>Blood Group: </strong> {blood[donor.bloodType as TBlood]}
            </Typography>
            <Typography variant='h6' sx={{ lineHeight: '1.2' }}>
              <strong>Location: </strong> {donor.location}
            </Typography>

            <Box mt={1}>
              <Chip
                label={donor.availability ? 'Available' : 'Not Available'}
                color={donor.availability ? 'success' : 'error'}
                variant='filled'
              />
            </Box>
          </Box>
        </Stack>
      </Link>
    </Grid>
  );
};

export default SingleDonor;
