import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { CssBaseline } from '@mui/material';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <main style={{ backgroundColor: '#CDE8E5', marginTop: '62px' }}>{children}</main>
      <Footer />
    </>
  );
}
