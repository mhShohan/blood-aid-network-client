'use client';

import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { z } from 'zod';

const loginSchema = z.object({
  usernameOrEmail: z.string().email({ message: 'Provide a valid email' }),
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
});

const LoginForm = () => {
  const handleLogin = (data: any) => {
    console.log(data);
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
          <CustomInput name='usernameOrEmail' label='Username or Email' type='email' />
          <CustomInput name='password' label='Password' type='password' />
          <Button type='submit'>Login</Button>
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
