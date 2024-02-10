import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrowerType } from './Drawer';
import { AppLogo } from '@/components';
import { useEffect, useState } from 'react';
import User from '@/api/User';
import auth from '@/services/auth';

export default function MenuAppBar({ Drawer }: { Drawer: DrowerType }) {
  const [state, setState] = useState<User | null>(null);
  useEffect(()=>{
    auth.getCurrentUser().then((value)=>{
      setState(value)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <AppLogo />
            <span>
              @userName
            </span>
          <div>
            <Drawer user={state}/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
