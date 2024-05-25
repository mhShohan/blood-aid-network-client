'use client';

import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { adminsMenu, usersMenu } from '@/data/sidebarData';
import storage from '@/utils/storage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ListItem } from '../../extended/ListItem';
import { useEffect, useState } from 'react';

const DrawerItem = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState([...usersMenu]);

  useEffect(() => {
    const user = storage.getUser();

    if (user?.role === 'ADMIN') {
      setMenu([...adminsMenu]);
    }
  }, []);

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {menu?.map((item) => (
          <Link href={item.path} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem
              disablePadding
              sx={{ borderLeft: `5px solid ${pathname === item.path ? 'red' : 'transparent'}` }}
            >
              <ListItemButton>
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default DrawerItem;
