import RegisterForm from '@/components/containers/auth/RegisterForm';
import { Stack } from '@mui/material';

const RegisterPage = () => {
  return (
    <Stack minHeight='80vh' justifyContent='center' alignItems='center' py={6}>
      <RegisterForm />
    </Stack>
  );
};

export default RegisterPage;
