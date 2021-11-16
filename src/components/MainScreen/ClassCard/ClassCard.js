import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from 'react-router-dom'
export default function ClassCard({ Class }) {
  const navigate = useNavigate()
  const pressed = () => {
    navigate(`/ClassDetail/${Class.classid}`)
    
  }
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick = {pressed}>
        <CardMedia
          component="img"
          height="140"
          image='/images/contemplative-reptile.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" noWrap>
            {Class.name}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}