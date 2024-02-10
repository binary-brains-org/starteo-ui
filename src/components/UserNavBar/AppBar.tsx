import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrowerType } from './Drawer';

export default function MenuAppBar({ Drawer }: { Drawer: DrowerType }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='relative'>
          <div className='flex absolute right-2 flex-row items-center'>
            <span>
              @userName
            </span>
            <Drawer user={{email:"email",firstname:"email",id:"idbro",lastname:"sdlfkjldskj",picture:"sdljfdslj",username:"@hidden-am"}}/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
