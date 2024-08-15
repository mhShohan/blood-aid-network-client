import SectionTitle from '@/components/UI/SectionTitle';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const tips = [
  {
    icon: AcUnitIcon,
    title: 'Stay Hydrated',
    description:
      'Drink plenty of fluids before and after donating blood to help replace the fluids lost during the donation process.',
  },
  {
    icon: AccessibilityIcon,
    title: 'Eat Well',
    description:
      'Eat a healthy, balanced meal before donating blood to help maintain your energy levels and prevent dizziness.',
  },
  {
    icon: AccountBalanceIcon,
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
              <Card
                sx={{
                  minHeight: '180px',
                  bgcolor: 'transparent',
                  boxShadow: 24,
                  p: 2,
                  borderRadius: '1rem',
                }}
              >
                <CardContent>
                  <Box display='flex' justifyContent='center' my={4}>
                    <tip.icon sx={{ fontSize: '6rem' }} />
                  </Box>
                  <Typography
                    variant='h5'
                    component='h5'
                    textAlign='center'
                    fontWeight='600'
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
