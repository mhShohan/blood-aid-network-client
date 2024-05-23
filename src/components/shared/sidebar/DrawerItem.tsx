import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItem } from '../../extended/ListItem';
import { menu } from '@/data/sidebarData';
import Link from 'next/link';

const DrawerItem = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {menu.map((item) => (
          <Link href={item.path} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding sx={{ borderLeft: '5px solid red' }}>
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
