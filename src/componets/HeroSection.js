
import React from 'react'
import { Grid, Typography } from '@mui/material';
import './HeroSection.css'
import RoadMap from './RoadMap';

function HeroSection() {
  return (
    <>
      <div className='Container'>
        <div  >
          <Typography className='HeadingHow'>How to Buy</Typography></div>
        <div>
          <Typography className='Text'>Welcome to the EVOX token purchase guide! Follow these straightforward steps to easily acquire EVOX tokens and join the future of real estate investment. Whether you're new to cryptocurrency or a seasoned investor, our platform makes it simple and secure to buy EVOX tokens. Let's get started!</Typography>
        </div>
        <div className='CardContainer'>
          <div className='Card1'>
            <Typography className='Card_text'  >1</Typography>
            <Typography className='cardpragrph'>Make sure you are on the website: https://(website name)</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >2</Typography>
            <Typography className='cardpragrph'>Add EVOX token address to MetaMask: 0x15…..acc57fC</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >3</Typography>
            <Typography className='cardpragrph' >Ensure you have 0.02 ETH to pay for gas fee and have sufficient USDT to buy EVOX Tokens</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >4</Typography>
            <Typography className='cardpragrph'>Connect MetaMask or any other wallet.</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >5</Typography>
            <Typography className='cardpragrph'>Make sure you have USDT (ERC20) in your wallet.</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >6</Typography>
            <Typography className='cardpragrph'>Enter the quantity of EVOX Tokens you want to buy.</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >7</Typography>
            <Typography className='cardpragrph'>Click on the 'Buy' button.</Typography>
          </div>
          <div className='Card1'>
            <Typography className='Card_text'  >8</Typography>
            <Typography className='cardpragrph'>You will receive EVOX tokens in your wallet.</Typography>
          </div>
        </div>
        <Grid className='RoadMap'>
        <Grid  >
          <Typography className='HeadingHow'>Roadmap</Typography></Grid>
        <Grid>
          <Typography className='Text'>Evox's journey is all about innovation, user satisfaction, and market leadership in the blockchain real estate sector. Our roadmap highlights the key milestones and strategic developments that showcase our commitment to leveraging emerging trends and technologies. Dive into our exciting future and see how Evox is set to revolutionize real estate investment!

          </Typography>
        </Grid>
        </Grid>
    
        
      </div>
      <RoadMap/>

    </>
  )
}

export default HeroSection