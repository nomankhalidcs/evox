import React, { Fragment } from 'react'
import { Grid, Typography } from '@mui/material';
import { IsolationMode, CameraIcon, Blackcircul,LearnMode } from '../componets/Icon';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import HeroCard from '../componets/HeroCard';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './Home.css'
import ProgresBar from '../componets/ProgresBar';
import HeroSection from '../componets/HeroSection';
function Home() {
  return (
    <Fragment>
      <Grid style={{ display: 'flex',alignItems:'center',position:'relative', overflow:'hidden',paddingTop:'60px'}}>
        <Grid style={{padding:'0px 30px' }}>
          <IsolationMode />
          <Typography style={{ width: '100px', height: '27px', fontWeight: '700px', fontSize: '17px', lineHeight: '26px', fontFamily: 'Poppins', marginTop: '386px' }}>FOLLOW US</Typography>
          <Typography style={{ width: '159px', height: '90px', fontWeight: '400px', fontSize: '12px', lineHeight: '18px', fontFamily: 'Poppins' }}>Feel free to follow us on social media, you can get all the news and update on our platform and its easier to stay up to date</Typography>
          <Grid  style={{display:'flex', justifyContent:'center', alignItems:'center' ,gap:'5px', marginTop:'17px'}}>
            <CameraIcon />
            <Blackcircul />
            <Blackcircul /></Grid>

        </Grid>
        <Grid style={{
          backgroundImage: 'url(/Images/BackgroundBlack.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '1124px',
          height: '832px',
          padding:"0px 20px"
        }}>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '40px', color: '#C4C4C4', padding:'45px 72px'  ,fontFamily: 'Poppins' }} >
            <li style={{fontFamily: 'Poppins'}} >Home</li>
            <li style={{fontFamily: 'Poppins'}}>About us</li>
            <li style={{fontFamily: 'Poppins'}}>Contact us</li>
            <li style={{fontFamily: 'Poppins'}}>WhitePaper</li>
          </ul>
          <Grid style={{display:'flex', }}>
            
          <HeroCard/>
          <Grid style={{marginRight:'20px'}} >
            <img style={{ width:'770px',height:'897px',position:'absolute', bottom:'1px', }} src='./Images/BulidingiMage.png' /></Grid>
          </Grid>
          
        </Grid>
      
      </Grid>
      <Grid style={{width:'448px', height:'78px', borderRadius:"60px",  display:'flex' ,justifyContent:'center', textAlign:'center', backgroundColor:'#139ED5', alignItems:'center',gap:'17px', color:' #FFFFFF', marginTop:'-70px'}}>
              <Typography style={{fontSize:'14px', fontWeight:'600', lineHeight:'21px', fontFamily:'poppins'}}> Gateway to Invest in Realty Across the Globe</Typography>
              <LearnMode style={{animation: "rotate360 2s linear infinite"}} />
            </Grid>

            <Grid>
              <HeroSection/>
            </Grid>
    </Fragment>
  )
}

export default Home