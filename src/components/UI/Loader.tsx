import { Box, CircularProgress, Stack } from '@mui/material';
import Image from 'next/image';
import spinner from '@/assets/spinner.svg';

const Loader = () => {
  return (
    <Stack justifyContent='center' alignItems='center' height='100%' my={10}>
      <CircularProgress sx={{ width: '200px !important', height: '200px !important' }} />
    </Stack>
  );
};

export default Loader;
