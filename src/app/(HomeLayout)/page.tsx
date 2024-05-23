import AboutSection from '@/components/containers/homepage/AbooutSection';
import HeroSection from '@/components/containers/homepage/HeroSection';
import SearchBloodDonor from '@/components/containers/homepage/SearchBloodDonor';
import { CssBaseline } from '@mui/material';

const Homepage = () => {
  return (
    <>
      <CssBaseline />
      <HeroSection />
      <AboutSection />
      <SearchBloodDonor />
    </>
  );
};

export default Homepage;
