'use client';

import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import { login } from '@/services/actions/login';
import { setLoggedInUser } from '@/store/authSlice';
import { useAppDispatch } from '@/store/hooks';
import storage from '@/utils/storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const loginSchema = z.object({
  usernameOrEmail: z.string().min(1, { message: 'Provide username or email' }),
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await login(data);

      if (res?.success) {
        toast.success('Login Successful');
        storage.setToken(res.data.token);
        dispatch(setLoggedInUser(res.data.token));
        router.push('/');
      } else {
        toast.error('Wrong Credentials!');
      }
    } catch (error) {
      toast.error('Failed to login!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack
      maxWidth='500px'
      minWidth='400px'
      py={4}
      px={6}
      sx={{ border: '1px solid #1A374D', borderRadius: '.6rem' }}
    >
      <Typography
        variant='h4'
        align='center'
        fontWeight='700'
        textTransform='uppercase'
        color='#1A374D'
        pb={2}
      >
        Login Here
      </Typography>
      <CustomForm
        onSubmit={handleLogin}
        defaultValues={{ usernameOrEmail: '', password: '' }}
        resolver={zodResolver(loginSchema)}
      >
        <Stack direction='column' gap={1}>
          <CustomInput name='usernameOrEmail' label='Username or Email' />
          <CustomInput name='password' label='Password' type='password' />
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
              'Login'
            )}
          </Button>
        </Stack>
      </CustomForm>
      <Box style={{ textAlign: 'center', marginTop: '10px' }}>
        <Typography variant='body1'>
          Have no Account?{' '}
          <Link href='/register' style={{ textDecoration: 'none' }}>
            Register Here!
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default LoginForm;
