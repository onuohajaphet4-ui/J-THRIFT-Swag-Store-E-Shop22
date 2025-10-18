import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
// import fem1 from '../assets/fe/fem1.jpg'
import Typography from '@mui/material/Typography';
import {AccessTime} from '@mui/icons-material'
import Rating from '@mui/material/Rating';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import {Link} from 'react-router-dom'
const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant: "body2",
                    },
                    style:{
                        fontSize:11,
                    },

                
                },
                {
                    props:{
                        variant: "body3",
                    },
                    style:{
                        fontSize:9,
                    },

                
                }
            ]
        }
    }
})
const Tourcard = ({tour}) => {
  return (

     
     <Grid item xs={12} sm={6} md ={3}>
        <Link to ='/tour' className='link'>
      <Paper elevation={5} square  style={{
        borderRadius:3,
        overflow: "hidden",
        height:"100%"
      }} >
        <img src= {tour.image}
        alt=""  className='img'/>

      <Box paddingX={1}>
        <Typography variant='subtitle1' component= "h2">
          {tour.name}
        </Typography>

        <Box style={{
            display: "flex",
            alignItem :"center",
          }}>
            
           <AccessTime style ={{width: 12.5}} />
           <Typography variant='body2' component= "p" marginLeft={0.5}>
              {tour.duration} hours
           </Typography>
        </Box>

        <Box style={{
            display: "flex",
            alignItem :"center",
          }}
          
          marginTop={3}
        >


         <Rating name="read-only" value={tour.rating} readOnly 
           precision={0.5}
           size='small'/>

           <Typography variant='body2' component= 'p' marginLeft={0.5}>
               {tour.rating}
           </Typography>

           <Typography variant='body3' component= 'p' marginLeft={1.5}>
               ( {tour.numberOfReviews}reviews)
           </Typography>

        </Box>

        <Box>
            <Typography variant='h6' component= 'h3' marginTop={0}>
               From Usd  {tour.price}
           </Typography>

        </Box>

        

        
      </Box>

      
      
      </Paper>
      </Link>
    </Grid>
  )
}

export default Tourcard
