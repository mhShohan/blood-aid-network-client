import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import bloodIcon from '@/assets/blood-icon.png';
import Link from 'next/link';

const Logo = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <Stack
      direction='row'
      component={Link}
      alignItems='center'
      href='/'
      sx={{
        mr: 2,
        display: { xs: mobile ? 'xs' : 'none', md: mobile ? 'none' : 'flex' },
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <Image src={bloodIcon} alt='Blood Icon' width={50} height={50} />
      <Typography variant='h5' noWrap fontWeight='800'>
        <span style={{ color: '#f8345b' }}>Blood</span>
        <span style={{ color: '#AEFEFF' }}>Aid</span>
        <span style={{ color: '#D8E3E7' }}>Network</span>
      </Typography>
    </Stack>
  );
};

export default Logo;
