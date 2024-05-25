import { Typography } from '@mui/material';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      component='h2'
      variant='h2'
      align='center'
      textTransform='uppercase'
      fontWeight='700'
      fontSize={{ xs: 'h4.fontSize', sm: 'h3.fontSize', md: 'h2.fontSize' }}
      mb={2}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
