'use client';

import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import { useChangePasswordMutation } from '@/store/api/donor.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Stack } from '@mui/material';
import { toast } from 'sonner';
import { z } from 'zod';

const defaultValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const validationSchema = z.object({
  oldPassword: z
    .string({ required_error: 'Old password is required' })
    .min(1, { message: 'Old password is required' }),
  newPassword: z
    .string({ required_error: 'New password is required' })
    .min(6, { message: 'New password must be at least 6 characters' }),
  confirmPassword: z
    .string({ required_error: 'Confirm password is required' })
    .min(6, { message: 'Confirm password must be at least 6 characters' }),
});

const ChangePasswordPage = () => {
  const [updatePassword] = useChangePasswordMutation();
  const handleUpdatePassword = async (values: any) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error('New password and confirm password do not match');
      return;
    }

    const payload = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    const toastId = toast.loading('Changing password...');
    try {
      const response = await updatePassword(payload).unwrap();

      if (response.success) {
        toast.success('Password changed successfully', { id: toastId });
        return true;
      } else {
        toast.error(response.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <Stack py={10}>
      <Container maxWidth='xs'>
        <CustomForm
          onSubmit={handleUpdatePassword}
          defaultValues={defaultValues}
          resolver={zodResolver(validationSchema)}
        >
          <Stack gap={1} boxShadow={20} p={4}>
            <CustomInput name='oldPassword' label='Old Password' type='password' />
            <CustomInput name='newPassword' label='New Password' type='password' />
            <CustomInput name='confirmPassword' label='Confirm Password' type='password' />
            <Button type='submit'>Change Password</Button>
          </Stack>
        </CustomForm>
      </Container>
    </Stack>
  );
};

export default ChangePasswordPage;
