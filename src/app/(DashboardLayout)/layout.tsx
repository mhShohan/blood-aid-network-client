'use client';

import Sidebar from '@/components/shared/sidebar/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
