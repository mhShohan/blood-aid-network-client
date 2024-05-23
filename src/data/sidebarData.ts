import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const menu = [
  { id: '1', name: 'My Account', icon: PermIdentityIcon, path: '/account' },
  { id: '2', name: 'My Order', icon: DescriptionOutlinedIcon, path: '/order' },
  { id: '3', name: 'My Subscriptions', icon: WalletOutlinedIcon, path: '/subscriptions' },
  { id: '4', name: 'My Download', icon: CloudDownloadOutlinedIcon, path: '/download' },
  { id: '5', name: 'My Lightbox', icon: FavoriteBorderOutlinedIcon, path: '/lightbox' },
];