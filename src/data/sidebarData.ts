import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export const usersMenu = [
  { id: '1', name: 'Dashboard', icon: DashboardIcon, path: '/dashboard', role: ['ADMIN', 'USER'] },
  { id: '3', name: 'Blood Requests', icon: BloodtypeIcon, path: '/blood-requests', role: ['ADMIN', 'USER'] },
  { id: '2', name: 'My Requests', icon: AccessTimeFilledIcon, path: '/my-requests', role: ['ADMIN', 'USER'] },
  { id: '4', name: 'My Profile', icon: AccountCircleIcon, path: '/profile', role: ['ADMIN', 'USER'] },
];

export const adminsMenu = [
  { id: '1', name: 'Dashboard', icon: DashboardIcon, path: '/dashboard', role: ['ADMIN', 'USER'] },
  { id: '3', name: 'Blood Requests', icon: BloodtypeIcon, path: '/blood-requests', role: ['ADMIN', 'USER'] },
  { id: '2', name: 'My Requests', icon: AccessTimeFilledIcon, path: '/my-requests', role: ['ADMIN', 'USER'] },
  { id: '4', name: 'Manage Users', icon: ManageAccountsIcon, path: '/manage-users', role: ['USER'] },
  { id: '5', name: 'My Profile', icon: AccountCircleIcon, path: '/profile', role: ['ADMIN', 'USER'] },
];