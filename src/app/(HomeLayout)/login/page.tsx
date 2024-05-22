import LoginForm from '@/components/containers/auth/LoginForm';
import { Stack } from '@mui/material';

const LoginPage = () => {
  return (
    <Stack minHeight='80vh' justifyContent='center' alignItems='center'>
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
