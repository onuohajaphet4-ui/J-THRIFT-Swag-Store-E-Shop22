import React from 'react'
import Tourcard from '../component/Tourcard.jsx'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

import cities from '../data.js'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <div>
      
      <Container style={{marginTop:60}}>
        {cities.map((city) => (
          <>
            <Typography
            variant='h4'
            component='h2'
             marginTop={5}
            marginBottom={3}
            >
            {city.name} 
            </Typography>

            <Grid container spacing={5} justifyContent="center">
            {city.tours.map((tour, index) => (
              <Grid item xs ={12} sm ={6} md={3}> 
            <Tourcard tour={tour} key ={index} />
             </Grid> 
            ))}
           </Grid>
          </>

          
        ))}
        
       
      </Container>
      
    </div>
  )
}

export default Home
