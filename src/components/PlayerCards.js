import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../App.css';
import { Grid } from '@mui/material';



export default function PlayerCards() {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="baseline"
    >
    <Card sx={{ maxWidth: 640 }}>
      <CardMedia
        component="img"
        alt="Villain"
        height=""
        image='https://i.blogs.es/243887/incognito/1366_2000.png'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Aurkariaren aukera
        </Typography>
      </CardContent>      
    </Card>
  </Grid>
  );
}