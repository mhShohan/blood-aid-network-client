import AboutSection from '@/components/containers/homepage/AbooutSection';
import HeroSection from '@/components/containers/homepage/HeroSection';
import { CssBaseline } from '@mui/material';

const Homepage = () => {
  return (
    <>
      <CssBaseline />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Homepage;
