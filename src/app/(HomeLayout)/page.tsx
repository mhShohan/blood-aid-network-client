import AboutSection from '@/components/containers/homepage/AbooutSection';
import DonationTips from '@/components/containers/homepage/DonationTips';
import HeroSection from '@/components/containers/homepage/HeroSection';
import SearchBloodDonor from '@/components/containers/homepage/SearchBloodDonor';
import SuccessStories from '@/components/containers/homepage/SuccessStories';
import { CssBaseline } from '@mui/material';

const Homepage = () => {
  return (
    <>
      <CssBaseline />
      <HeroSection />
      <AboutSection />
      <SearchBloodDonor />
      <SuccessStories />
      <DonationTips />
    </>
  );
};

export default Homepage;
