import { Grid, Typography } from '@mui/material'
import React from 'react'
// import Footer from './Footer'
import './RoadContainer.css'

function RoadMap() {
  return (
   <>
   
   <Grid >
   <Grid className='RoadMapContainer'>
   <Grid >
    <Grid className='RoadmapCard'> 
    <Grid >
        <Typography className='RoadmapText'>Q1</Typography></Grid>
        <Grid>
        <Typography className='RoadMapParagarph'>Q1 2022: Infrastructure Setup and Initial Prototyping
        <span className='FirstP'> <li>Design and setup of the initial technological infrastructure, focusing on selecting blockchain platforms and tools for development.</li>
        <li>
Creation of initial prototypes to validate the core concepts of tokenising real estate assets. </li></span>
</Typography></Grid>
    </Grid>
    <Grid style={{paddingTop:'164px'}}>
    <Grid className='RoadmapCard'> 
    <Grid >
        <Typography className='RoadmapText'>Q3</Typography></Grid>
        <Grid>
        <Typography className='RoadMapParagarph'>Q3 2022: Early Development Sprints and Backend Setup


        <span className='FirstP'> <li>Setup
Implementation of backend systems including database design, API integration, and initial blockchain functionality for asset tokenisation.</li>
        <li>
        Start of continuous integration/continuous deployment (CI/CD) processes to ensure smooth and efficient development cycles.</li></span>
</Typography></Grid>
    </Grid>
    </Grid></Grid>
    


   
   <Grid className='Q2card'>
    <Grid className='RoadmapCard'> 
    <Grid >
        <Typography className='RoadmapText'>Q2</Typography></Grid>
        <Grid>
        <Typography className='RoadMapParagarph'>Q2 2022: Detailed System Architecture and UX Design


        <span className='FirstP'> <li>Development of a comprehensive system architecture to support scalable and secure real estate transactions on blockchain.</li>
        <li>
        Design of user experience (UX) frameworks, focusing on intuitive navigation and user engagement for various platform stakeholders.</li></span>
</Typography></Grid>
    </Grid>
    <Grid style={{paddingTop:'164px'}}>
    <Grid className='RoadmapCard'> 
    <Grid >
        <Typography className='RoadmapText'>Q4</Typography></Grid>
        <Grid>
        <Typography className='RoadMapParagarph'>Q4 2022: Frontend Development and Initial Security Measures


        <span className='FirstP'> <li>Development of the frontend interface, integrating user experience design with real-time blockchain functionalities.</li>
        <li>
        
Establishment of initial security protocols, including encryption methods and wallet security features, based on best practices.
</li></span>
</Typography></Grid>
    </Grid>
    </Grid>
    


   </Grid>
   </Grid>
   </Grid>
   <Grid className='Tokenmics'>
    <Typography className='Token'>Tokenomics</Typography>
    <Typography className='Token_text'>Each aspect of the token utility and distribution is designed to ensure that Evox token holders from all parts of the ecosystem — from developers and investors to casual users — find value in using and holding Evox tokens. This balanced approach aims to create a sustainable economic model that supports the platform's growth and the appreciation of token value over time.</Typography>

   </Grid>
   <Grid className='Image'>
    <img  src='/Images/totalSuply.svg'/>
   </Grid>
   <Grid  className='GarphImage'>
    <img src='/Images/Garphimage.svg'/>
   </Grid>
   {/* <Footer/> */}
   </>
  )
}

export default RoadMap