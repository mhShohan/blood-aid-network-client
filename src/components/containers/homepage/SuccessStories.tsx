import { Box, Card, CardContent, Container, Grid, SxProps, Typography } from '@mui/material';

const SuccessStories = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box py={8} bgcolor='#77ABB7' sx={{ ...sx }}>
      <Container maxWidth='md'>
        <Typography
          component='h2'
          variant='h2'
          align='center'
          textTransform='uppercase'
          fontWeight='700'
          mb={2}
        >
          Success Stories
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  Thanks to this website, I was able to find a willing donor and receive a
                  life-saving blood transfusion. I am forever grateful.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  Donating blood has never been easier. This website made the process smooth and
                  convenient, and I am happy to help save lives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SuccessStories;
