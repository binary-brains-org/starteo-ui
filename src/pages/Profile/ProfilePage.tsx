import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Box,
  Container,
} from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Card>
            <CardHeader
              avatar={<img alt="User Avatar" src="/path/to/avatar.jpg" />}
              title="John Doe"
              subheader="Support Specialist"
            />
            <CardMedia
              component="img"
              height="140"
              image="/path/to/cover.jpg" // Replace with your cover image path
              alt="Cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}></Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;

