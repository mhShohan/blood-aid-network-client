import Contact from '@/components/containers/aboutUs/Contact';
import TeamMembers from '@/components/containers/aboutUs/TeamMembers';
import AboutSection from '@/components/containers/homepage/AbooutSection';
import SuccessStories from '@/components/containers/homepage/SuccessStories';

const AboutUsPage = () => {
  return (
    <>
      <AboutSection />
      <SuccessStories sx={{ bgcolor: 'initial' }} />
      <TeamMembers />
      <Contact />
    </>
  );
};

export default AboutUsPage;
