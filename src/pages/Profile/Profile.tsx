import React from 'react';
import { Typography, Paper, Avatar, Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const ProfilePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} container justifyContent="center">
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={12} md={8} container alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">John Doe</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Email: johndoe@example.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Location: New York, USA</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfilePage;

