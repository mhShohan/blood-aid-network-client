import { Box, Grid, Skeleton, Stack } from '@mui/material';

const DonorSkeleton = () => {
  return (
    <Grid container>
      {[1, 2, 3].map((item) => (
        <Grid key={item} item xs={12} md={6} lg={4} p={1}>
          <Stack
            sx={{
              border: '1px solid #aaa',
              padding: '1.5rem',
              borderRadius: '8px',
            }}
          >
            <Skeleton variant='rectangular' height={250} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} />
              <Skeleton height={25} width='50%' />
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default DonorSkeleton;
