import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import main from '../assets/main2.avif'
import Image from '../component/Image'
import  ACo from '../component/ACo'
import  Mod from '../component/Mod'
// import {Link} from 'react-router-dom'
const Tour = () => {
  return (
    <Container >
        <Typography variant='h6' component='h1' marginTop={3}>
            Explore the Fashoin World With Jthrift
        </Typography>
        <Box marginTop={3 } style={{display:'flex'}}>
          <img src={main} alt="" width={200} height={450}/>

          <Image/>
        </Box>

        <Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About Us
            </Typography>

            <Typography variant='paragraph' component='p'  marginTop={3}>
                JThrift, is more than just a shopping website — we are your fashion partner. We built the goto online fashion website for those who value convenience and style. If you prefer shopping from the comfort of your home at unbeatable prices, or have a unique sense of style, we’re here for you. From Retro enthusiasts to Gen Z, Millennials,
                  and Bloomers, we’ve got everyone covered. Read latest fashion gist via our blo
            </Typography>
        </Box>

        <Box marginBottom={10}>
            <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                Frequatly Asked Questions
            </Typography>

            <ACo/>
        </Box>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        
            <BottomNavigation >
             <Mod/>
            </BottomNavigation>
        
      </Paper>
  

       


    </Container>
  )
}

export default Tour
