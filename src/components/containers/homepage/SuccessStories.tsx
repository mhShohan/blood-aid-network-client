import SectionTitle from '@/components/UI/SectionTitle';
import { Box, Card, CardContent, Container, Grid, SxProps, Typography } from '@mui/material';

const SuccessStories = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box py={8} bgcolor='#77ABB7' sx={{ ...sx }}>
      <Container maxWidth='md'>
        <SectionTitle title='Success Stories' />
        <Grid container spacing={4} justifyContent='center'>
          <Grid item xs={12} sm={6}>
            <Card sx={{ bgcolor: 'transparent', boxShadow: 24, p: 2 }}>
              <CardContent>
                <Typography
                  variant='h6'
                  sx={{
                    textAlign: 'justify',
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                  }}
                >
                  Thanks to this website, I was able to find a willing donor and receive a
                  life-saving blood transfusion. I am forever grateful.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ bgcolor: 'transparent', boxShadow: 24, p: 2 }}>
              <CardContent>
                <Typography
                  variant='h6'
                  sx={{
                    textAlign: 'justify',
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                  }}
                >
                  Donating blood has never been easier. This website made the process smooth and
                  convenient, and I am happy to help save lives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br />
      </Container>
    </Box>
  );
};

export default SuccessStories;
