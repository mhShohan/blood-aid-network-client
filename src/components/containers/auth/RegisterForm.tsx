'use client';

import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import CustomSelectField from '@/components/shared/CustomSelect';
import CustomDatePicker from '@/components/shared/CutomDatePicker';
import { bloodGroup } from '@/constant';
import { register } from '@/services/actions/register';
import { setLoggedInUser } from '@/store/authSlice';
import { useAppDispatch } from '@/store/hooks';
import dateFormatter from '@/utils/dateFormatter';
import storage from '@/utils/storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(3, { message: 'Name must contain at least 3 characters' }),
  username: z.string().min(3, { message: 'Username must contain at least 3 characters' }),
  email: z.string().email({ message: 'Provide a valid email' }),
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
  bloodType: z.string().min(1, { message: 'Blood Type is required' }),
  location: z.string().min(1, { message: 'Location is required' }),
  dateOfBirth: z.date({ message: 'Provide a valid date Of Birth' }),
  // lastDonationDate: z.date({ message: 'Provide a valid  last Donation Date' }),
});

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: any) => {
    data.dateOfBirth = dateFormatter.dateToString(data.dateOfBirth);

    if (data.lastDonationDate) {
      data.lastDonationDate = dateFormatter.dateToString(data.lastDonationDate);
    }

    try {
      setIsLoading(true);
      const res = await register(data);

      if (res?.success) {
        toast.success('Register new account Successfully');
        storage.setToken(res.data.token);
        dispatch(setLoggedInUser(res.data.token));
        router.push('/');
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error('Failed to Register!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack
      maxWidth='700px'
      minWidth='400px'
      py={4}
      px={6}
      sx={{ border: '1px solid #1A374D', borderRadius: '.6rem' }}
    >
      <Typography
        variant='h5'
        align='center'
        fontWeight='700'
        textTransform='uppercase'
        color='#1A374D'
        pb={2}
      >
        Register New Account
      </Typography>
      <CustomForm
        onSubmit={handleLogin}
        defaultValues={{
          name: '',
          username: '',
          email: '',
          password: '',
          bloodType: '',
          location: '',
          dateOfBirth: '',
          lastDonationDate: '',
        }}
        resolver={zodResolver(registerSchema)}
      >
        <Grid container>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomInput name='name' label='Name' />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomInput name='username' label='Username' />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomInput name='email' label='Email' />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomInput name='password' label='Password' type='password' />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomSelectField name='bloodType' label='Blood Group' items={bloodGroup} />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomInput name='location' label='Location' />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomDatePicker name='dateOfBirth' label='Date Of Birth' />
          </Grid>
          <Grid item xs={12} md={6} p={0.5}>
            <CustomDatePicker name='lastDonationDate' label='Last Donation Date' />
          </Grid>
        </Grid>
        <Box py={1} display='flex' justifyContent='center'>
          <Button type='submit'>
            {isLoading ? (
              <CircularProgress
                color='warning'
                sx={{
                  width: '25px !important',
                  height: '25px !important',
                }}
              />
            ) : (
              'Register'
            )}
          </Button>
        </Box>
      </CustomForm>

      <Box style={{ textAlign: 'center', marginTop: '10px' }}>
        <Typography variant='body1'>
          Already Have an Account?{' '}
          <Link href='/login' style={{ textDecoration: 'none' }}>
            Login Here!
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default RegisterForm;
