import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { menu } from '@/data/sidebarData';
import Link from 'next/link';
import { ListItem } from '../../extended/ListItem';
import { usePathname } from 'next/navigation';

const DrawerItem = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {menu.map((item) => (
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
