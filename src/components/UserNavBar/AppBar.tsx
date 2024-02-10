import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrowerType } from './Drawer';
import { AppLogo } from '@/components';

export default function MenuAppBar({ Drawer }: { Drawer: DrowerType }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <AppLogo />

          <div>
            <Drawer />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
