import Header from '@/components/shared/Header';
import { CssBaseline } from '@mui/material';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
}
