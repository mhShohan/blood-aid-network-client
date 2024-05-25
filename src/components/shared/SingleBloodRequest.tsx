import blankProfile from '@/assets/blank-profile.png';
import { TBlood, blood } from '@/constant';
import { useAcceptBloodRequestMutation } from '@/store/api/bloodRequests.api';
import { useAppSelector } from '@/store/hooks';
import { IBloodRequest } from '@/types/bloodRequest';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const SingleBloodRequest = ({ request }: { request: IBloodRequest }) => {
  const [acceptRequest] = useAcceptBloodRequestMutation();
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();

  const acceptBloodRequest = async () => {
    if (!token) {
      toast.error('You need to login to accept blood request');
      router.push('/login');
      return;
    }

    const toastId = toast.loading('Accepting Blood Request...');

    try {
      const res = await acceptRequest(request.id).unwrap();

      if (res.success) {
        toast.success('Blood Request Accepted', { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.data.message, { id: toastId });
    }
  };

  return (
    <Grid item key={request.id} xs={12} md={6} lg={4} p={1}>
      <Stack
        sx={{
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: 10,
        }}
      >
        <Box>
          <Image
            src={request?.requester?.userProfile?.profilePicture || blankProfile}
            alt={request.requester.name}
            width={200}
            height={200}
            layout='responsive'
            style={{
              borderRadius: '8px',
            }}
          />
        </Box>
        <Box my={2}>
          <InfoBox name='Name' value={request.requester.name} />
          <InfoBox name='Blood Group' value={blood[request.bloodType as TBlood]} />
          <InfoBox name='Number of Bags' value={request.numberOfBag} />
          <InfoBox name='Contact Number' value={request.phoneNumber} />
        </Box>
        <Button onClick={acceptBloodRequest}>Accept Blood Request</Button>
      </Stack>
    </Grid>
  );
};

export default SingleBloodRequest;

const InfoBox = ({ name, value }: { name?: string; value?: number | string }) => {
  return (
    <Box display='flex' px={1} alignItems='center'>
      <Typography fontWeight={700} sx={{ flex: 1 }}>
        {name}
      </Typography>
      <Typography fontWeight={400} flex={1}>
        {value}
      </Typography>
    </Box>
  );
};
