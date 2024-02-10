import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { Avatar, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { User } from '@/types';

interface propsType {
  user: User;
}

export interface DrowerType extends React.FC<propsType> { }

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const UserInformation = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className='flex flex-col p-4 flex justify-center'>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width:100 , height: 100 , bgcolor:"#1f1f1f"}}
        />
      </div>
      <div className='w-full flex-col flex border-2 boder-color-black py-3'>
        <UserButton StartIcon={EditIcon}>
          Edit Profile
        </UserButton>
      </div>
    </Box>
  );
  const UserButton = ({children, StartIcon}:{children: String, StartIcon:any}) => {
    return(
      <Button variant='outlined' sx={{width:"100%", padding:"10px", }} startIcon={<StartIcon/>}>{children}</Button>
    )
  }
  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Drawer anchor={'right'} variant='temporary' open={state} onClose={toggleDrawer(false)}>
          <UserInformation />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
