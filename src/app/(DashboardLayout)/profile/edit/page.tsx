'use client';

import Loader from '@/components/UI/Loader';
import CustomFileUploader from '@/components/shared/CustomFileUploader';
import CustomForm from '@/components/shared/CustomForm';
import CustomInput from '@/components/shared/CustomInput';
import CustomSelectField from '@/components/shared/CustomSelect';
import CustomDatePicker from '@/components/shared/CutomDatePicker';
import { bloodGroup } from '@/constant';
import { useGetMyProfileQuery, useUpdateMyProfileMutation } from '@/store/api/donor.api';
import { config } from '@/utils/config';
import dateFormatter from '@/utils/dateFormatter';
import { Button, Container, Grid, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const UpdateProfilePage = () => {
  const [updateMyProfile, { isLoading: isUpdating }] = useUpdateMyProfileMutation();
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  const router = useRouter();

  if (isLoading) return <Loader />;

  const defaultValues = {
    user: {
      name: data.data.name,
      email: data.data.email,
      username: data.data.username,
      bloodType: data.data.bloodType,
      location: data.data.location,
      availability: String(data.data.availability),
    },
    userProfile: {
      bio: data.data.userProfile.bio,
      dateOfBirth: data.data.userProfile.dateOfBirth,
      lastDonationDate: data.data.userProfile.lastDonationDate,
      profilePicture: '',
    },
  };

  const handleUpdateProfile = async (values: any) => {
    if (imageUrl) {
      values.userProfile.profilePicture = imageUrl;
    }
    values.userProfile.dateOfBirth = dateFormatter.dateToString(values.userProfile.dateOfBirth);
    values.userProfile.lastDonationDate = dateFormatter.dateToString(
      values.userProfile.lastDonationDate
    );
    values.userProfile.id = data.data.userProfile.id;
    values.user.availability = values.user.availability === 'true' ? true : false;

    try {
      const res = await updateMyProfile({ id: data.data.id, payload: values }).unwrap();
      if (res.success) {
        router.push('/profile');
        toast.success('Profile Updated Successfully!');
      }
    } catch (error) {
      toast.error('Failed to Update Profile');
    }
  };

  const handleFileUpload = async (image: any) => {
    const toastId = toast.loading('Uploading Image...');
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', config.cloudinaryUploadPreset as string);
    data.append('cloud_name', config.cloudinaryCloudName as string);
    data.append('folder', 'blood-aid-network');

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${config.cloudinaryCloudName}/image/upload`,
        {
          method: 'POST',
          body: data,
        }
      );
      const res = await response.json();

      if (res.secure_url) {
        setImageUrl(res.secure_url);
        toast.success('Image Uploaded Successfully, now save update!', { id: toastId });
      } else {
        toast.error('Failed to Upload Image', { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to Upload Image', { id: toastId });
    }
  };

  return (
    <Stack py={10}>
      <Container maxWidth='md'>
        <CustomForm onSubmit={handleUpdateProfile} defaultValues={defaultValues}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomInput name='user.name' label='Name' />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput name='user.email' label='Email' />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput name='user.username' label='Username' />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelectField name='user.bloodType' label='Blood Type' items={bloodGroup} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput name='user.location' label='Location' />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelectField
                name='user.availability'
                label='Availability'
                items={[
                  { name: 'True', value: 'true' },
                  { name: 'False', value: 'false' },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput name='userProfile.bio' label='Bio' />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomDatePicker name='userProfile.dateOfBirth' label='Date of Birth' />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomDatePicker name='userProfile.lastDonationDate' label='Last Donation Date' />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomFileUploader
                name='file'
                onFileUpload={handleFileUpload}
                label='Change Profile Photo'
              />
            </Grid>
          </Grid>
          <Stack justifyContent='center' my={4}>
            <Button type='submit' variant='contained' fullWidth disabled={isUpdating}>
              {isUpdating ? 'Updating...' : 'Update Profile'}
            </Button>
          </Stack>
        </CustomForm>
      </Container>
    </Stack>
  );
};

export default UpdateProfilePage;
