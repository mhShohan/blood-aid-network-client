import SectionTitle from '@/components/UI/SectionTitle';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const tips = [
  {
    title: 'Stay Hydrated',
    description:
      'Drink plenty of fluids before and after donating blood to help replace the fluids lost during the donation process.',
  },
  {
    title: 'Eat Well',
    description:
      'Eat a healthy, balanced meal before donating blood to help maintain your energy levels and prevent dizziness.',
  },
  {
    title: 'Rest After Donation',
    description:
      'Take it easy and rest for a while after donating blood to allow your body to recover.',
  },
];

const DonationTips = () => {
  return (
    <Box py={8}>
      <Container maxWidth='lg'>
        <SectionTitle title='Donation Tips' />
        <Grid container spacing={4} justifyContent='center'>
          {tips.map((tip) => (
            <Grid key={tip.title} item xs={12} sm={6} md={4}>
              <Card sx={{ minHeight: '180px', bgcolor: 'transparent', boxShadow: 24, p: 2 }}>
                <CardContent>
                  <Typography
                    variant='h4'
                    component='h5'
                    fontStyle='italic'
                    textAlign='center'
                    mb={1}
                    gutterBottom
                  >
                    {tip.title}
                  </Typography>
                  <Typography variant='body1' textAlign='justify' fontStyle='italic'>
                    {tip.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* <Grid item xs={12} sm={6} md={4}>
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
          </Grid> */}
        </Grid>
        <br />
      </Container>
    </Box>
  );
};

export default DonationTips;
