import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        alt="Villain"
        height=""
        image='https://images.cults3d.com/nTYSmBDsvEGGXTqRjCMZG2xjB3g=/https://files.cults3d.com/uploaders/17397197/illustration-file/896d26e1-cef7-413a-8990-f24eed234561/Dado-piedra-papel-o-tijera_03.png'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Guraizea
        </Typography>
      </CardContent>      
    </Card>
    <Card sx={{ maxWidth: 350 }}>
    <CardMedia
      component="img"
      alt="Villain"
      height=""
      image="https://images.cults3d.com/opunumyopGcGapkrppsNiilgI4s=/https://files.cults3d.com/uploaders/17397197/illustration-file/307de353-958b-496e-b6f6-e121f60c45af/Dado-piedra-papel-o-tijera_01.png"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" align='center'>
        Harria
      </Typography>
    </CardContent>      
  </Card>
  </Grid>
  );
}