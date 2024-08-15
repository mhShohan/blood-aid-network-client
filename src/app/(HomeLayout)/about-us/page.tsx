import Contact from '@/components/containers/aboutUs/Contact';
import TeamMembers from '@/components/containers/aboutUs/TeamMembers';
import AboutSection from '@/components/containers/homepage/AbooutSection';
import CoverageArea from '@/components/containers/homepage/CoverageArea';
import DonationTips from '@/components/containers/homepage/DonationTips';
import SuccessStories from '@/components/containers/homepage/SuccessStories';

const AboutUsPage = () => {
  return (
    <>
      <AboutSection />
      <SuccessStories sx={{ bgcolor: 'initial' }} />
      <CoverageArea />
      <TeamMembers />
      <DonationTips />
      <Contact />
    </>
  );
};

export default AboutUsPage;
