// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import React, { useState, useEffect } from "react";
import dow from '../assets/dow.jpeg'

export default function MediaCard() {

     const [data, setData] = useState([]);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data.slice(0,9));
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

    
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        background:'linear-Gradient(to right, #717eccff,#9c27)'
      }}
    >
     
    {data.map((info) => (
    <Card sx={{ 
        maxWidth: 345 ,
        borderRadius:3,
        boxShadow: "0 4px 10px grey",
        transition:'0.3s',
        '&:hover':{
            transform: 'scale(1.1)',
            boxShadow:'0 6PX 20PX grey'
        }
        
        
        }}>
      <CardMedia
        sx={{ height: 180 }}
        image= {dow}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {info.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {info.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ))}
    </div>
  );
}
