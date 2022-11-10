import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component={props.component}
          height={props.height}
          image={props.image} // require image
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.dsc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         {props.btn}
        </Button>
      </CardActions>
    </Card>
  );
}