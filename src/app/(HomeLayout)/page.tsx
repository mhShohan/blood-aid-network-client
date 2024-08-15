import Contact from '@/components/containers/aboutUs/Contact';
import TeamMembers from '@/components/containers/aboutUs/TeamMembers';
import AboutSection from '@/components/containers/homepage/AbooutSection';
import CoverageArea from '@/components/containers/homepage/CoverageArea';
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
      <CoverageArea />
      <SuccessStories />
      <DonationTips />
      <TeamMembers />
      <Contact />
    </>
  );
};

export default Homepage;
