'use client';

import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import CustomSelectField from '@/components/shared/CustomSelect';
import CustomDatePicker from '@/components/shared/CutomDatePicker';
import { bloodGroup } from '@/constant';
import { useCreateBloodRequestMutation } from '@/store/api/bloodRequests.api';
import storage from '@/utils/storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Stack } from '@mui/material';
import { toast } from 'sonner';
import { z } from 'zod';

const bloodRequestSchema = z.object({
  bloodType: z.string().min(1, { message: 'Please select blood group' }),
  numberOfBag: z.string().min(1, { message: 'Number of bag must be equal or more than 1 ' }),
  phoneNumber: z.string().min(1, { message: 'Please Enter your phone number' }),
  dateOfDonation: z.date({ invalid_type_error: 'Enter a valid date' }),
  reason: z.string().min(1, { message: 'Please select blood group' }),
});

const BloodRequestPage = () => {
  const [createBloodRequest, { isLoading }] = useCreateBloodRequestMutation();

  const handleBloodRequest = async (values: any) => {
    const token = storage.getToken();

    if (!token) {
      toast.error('Please login to request blood');
      return;
    }
    values.numberOfBag = parseInt(values.numberOfBag);

    try {
      const res = await createBloodRequest(values).unwrap();

      if (res.success) {
        toast.success('Blood Request Sent Successfully');
        return true;
      } else {
        toast.error('Failed to send blood request');
      }
    } catch (error) {
      toast.error('Failed to send blood request');
    }
  };

  return (
    <Stack py={5} px={1}>
      <Container
        maxWidth='xs'
        sx={{
          borderRadius: 1,
          p: 3,
          boxShadow: 24,
        }}
      >
        <CustomForm
          onSubmit={handleBloodRequest}
          defaultValues={{
            bloodType: '',
            numberOfBag: '',
            phoneNumber: '',
            dateOfDonation: '',
            reason: '',
          }}
          resolver={zodResolver(bloodRequestSchema)}
        >
          <Stack gap={1}>
            <CustomSelectField name='bloodType' label='Blood Group' items={bloodGroup} />
            <CustomInput name='numberOfBag' label='Number of Bag' type='number' />
            <CustomInput name='phoneNumber' label='Phone Number' />
            <CustomDatePicker name='dateOfDonation' label='Date of Donation' />
            <CustomInput
              name='reason'
              label='Reason for Blood Need'
              type='textarea'
              placeholder='Why blood is need?'
            />
            <Button type='submit'>Send Blood Request</Button>
          </Stack>
        </CustomForm>
      </Container>
    </Stack>
  );
};

export default BloodRequestPage;
