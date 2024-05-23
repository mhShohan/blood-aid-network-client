import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const DonationTips = () => {
  return (
    <Box py={8}>
      <Container maxWidth='md'>
        <Typography
          component='h2'
          variant='h2'
          align='center'
          textTransform='uppercase'
          fontWeight='700'
          mb={2}
        >
          Blood Donation Tips
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '180px' }}>
              <CardContent>
                <Typography variant='h5' component='h5' textAlign='center' mb={1} gutterBottom>
                  Stay Hydrated
                </Typography>
                <Typography variant='body2' textAlign='justify' color='text.secondary'>
                  Drink plenty of fluids before and after donating blood to help replace the fluids
                  lost during the donation process.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '180px' }}>
              <CardContent>
                <Typography variant='h5' component='h5' textAlign='center' mb={1} gutterBottom>
                  Eat Well
                </Typography>
                <Typography variant='body2' textAlign='justify' color='text.secondary'>
                  Eat a healthy, balanced meal before donating blood to help maintain your energy
                  levels and prevent dizziness.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '180px' }}>
              <CardContent>
                <Typography variant='h5' component='h5' textAlign='center' mb={1} gutterBottom>
                  Rest After Donation
                </Typography>
                <Typography variant='body2' textAlign='justify' color='text.secondary'>
                  Take it easy and rest for a while after donating blood to allow your body to
                  recover.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DonationTips;
