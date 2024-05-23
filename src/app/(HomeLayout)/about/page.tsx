import AboutSection from '@/components/containers/homepage/AbooutSection';
import SuccessStories from '@/components/containers/homepage/SuccessStories';

const AboutUsPage = () => {
  return (
    <>
      <AboutSection />
      <SuccessStories sx={{ bgcolor: 'initial' }} />
    </>
  );
};

export default AboutUsPage;
