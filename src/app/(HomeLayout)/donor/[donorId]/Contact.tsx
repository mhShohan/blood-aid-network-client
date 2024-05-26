'use client';

import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import CustomDatePicker from '@/components/shared/CutomDatePicker';
import { useSendBloodRequestToDonorMutation } from '@/store/api/bloodRequests.api';
import { useAppSelector } from '@/store/hooks';
import dateFormatter from '@/utils/dateFormatter';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

const bloodRequestSchema = z.object({
  numberOfBag: z.string().min(1, { message: 'Number of bag must be equal or more than 1 ' }),
  phoneNumber: z.string().min(1, { message: 'Please Enter your phone number' }),
  dateOfDonation: z.date({ invalid_type_error: 'Enter a valid date' }),
  reason: z.string().min(1, { message: 'Please select blood group' }),
});

const Contact = ({ donorId }: { donorId: string }) => {
  const token = useAppSelector((state) => state.auth.token);
  const [sendBloodRequest, { isLoading }] = useSendBloodRequestToDonorMutation();
  const router = useRouter();

  const handleBloodRequest = async (values: any) => {
    if (!token) {
      router.push('/login');
      toast.error('Please login to request blood');
      return;
    }

    const payload = {
      numberOfBag: parseInt(values.numberOfBag),
      phoneNumber: values.phoneNumber,
      dateOfDonation: dateFormatter.dateToString(values.dateOfDonation),
      reason: values.reason,
    };

    const toastId = toast.loading('Sending Blood Request...');
    try {
      const res = await sendBloodRequest({ id: donorId, payload }).unwrap();

      if (res.success) {
        toast.success('Blood Request Sent Successfully', { id: toastId });
        return true;
      } else {
        toast.error('Failed to request blood', { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to request blood', { id: toastId });
    }
  };

  return (
    <CustomForm
      onSubmit={handleBloodRequest}
      defaultValues={{
        numberOfBag: '',
        phoneNumber: '',
        dateOfDonation: '',
        reason: '',
      }}
      resolver={zodResolver(bloodRequestSchema)}
    >
      <Stack gap={1}>
        <CustomInput name='numberOfBag' label='Number of Bag' type='number' />
        <CustomInput name='phoneNumber' label='Phone Number' />
        <CustomDatePicker name='dateOfDonation' label='Date of Donation' />
        <CustomInput
          name='reason'
          label='Message'
          type='textarea'
          placeholder='Message donor, Why do you need blood'
        />
        <Button type='submit'>Send Blood Request</Button>
      </Stack>
    </CustomForm>
  );
};

export default Contact;
