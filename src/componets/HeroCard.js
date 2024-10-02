import React from 'react'
import { Grid, Typography } from '@mui/material';
import ProgresBar from './ProgresBar';
import MediaCard from './Card';

function HeroCard() {
  return (
   <>
    <Grid style={{overflow:'hidden'}}>
          <Grid style={{background: 'linear-gradient(114.46deg, #323232 38.61%, rgba(152, 152, 152, 0) )', width:'366px',height:'501px', borderRadius:'18px', border:'solid 2px'}}>
              <Grid style={{color:'white' , fontFamily: 'Poppins'}}>
                <Grid style={{display:'flex', alignContent:'center', justifyContent:'center', marginTop:'34px'}}>
              <Typography style={{textAlign:'center', fontWeight:'500px' ,fontSize:'15px' , lineHeight:'22px',fontFamily: 'Poppins',color:'background: #F4F4F4'}}>BUY IN BEFORE PRICE INCREASES!</Typography></Grid>
              <Grid style={{display:'flex', alignContent:'center' ,justifyContent:'center' ,textAlign:'center', gap:'16px'}}>
                <Grid>
                  <Typography style={{fontWeight:'700',fontSize:'58px',lineHeight:'86px' ,fontFamily: 'Poppins'}}>14</Typography>
                  <Typography> Day</Typography></Grid>
                <Grid>
                  <Typography style={{fontWeight:'700',fontSize:'58px',lineHeight:'86px' ,fontFamily: 'Poppins'}}>10</Typography>
                  <Typography>HRS</Typography>
                </Grid>
                <Grid>
                  <Typography style={{fontWeight:'700',fontSize:'58px',lineHeight:'86px' ,fontFamily: 'Poppins'}}>13</Typography>
                  <Typography>MIN</Typography>
                  </Grid>
                <Grid>
                  <Typography style={{fontWeight:'700',fontSize:'58px',lineHeight:'86px' ,fontFamily: 'Poppins'}}>50</Typography>
                  <Typography>SEC</Typography>
                </Grid>
              </Grid>
              <Grid style={{display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', justifyContent:'space-between',color:' #F4F4F4'}}>
                <Typography style={{marginLeft:'45px'}}>$0</Typography>
                <Typography>$1.025.000</Typography>
                <Typography style={{marginRight:'51px'}}>$5.000.000</Typography>
              </Grid>
              <Grid>
                <ProgresBar/>
              </Grid>
              <Grid >
                <Typography className='CardText'>YOUR PURCHASED EVOX= 0</Typography>
                <Typography className='CardText2'>YOUR STAKEABLE EVOX= 0</Typography>
              </Grid>
              <Grid style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', marginTop:'9px'}}>
                <Grid style={{width:'58px', height:'1px', backgroundColor:'#FFFFFF'}}></Grid>
                <Typography style={{fontWeight:'500px', fontSize:'12px',lineHeight:'17px', color:'#F4F4F4', fontFamily:'Poppins'}}>1 EVOx = $0.0145</Typography>
                <Grid style={{width:'58px', height:'1px', backgroundColor:'#FFFFFF'}}></Grid>
              </Grid>
              <Grid>
                <Typography style={{fontWeight:'500px', fontSize:'8px', lineHeight:'12px',fontFamily:'Poppins', color:' #8D8A8A',marginLeft:'39px',marginTop:'13px'}}>Select Chain</Typography>
              <Grid style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'13px',marginTop:'6px'}}>
                
                <Grid style={{display:'flex', justifyContent:'center', alignItems:'center', width:'87px', height:'38px', borderRadius:'50px', backgroundColor:'#FFFFFF', gap:'5px'}}>
                <img src='/Images/Blackmob.png'/>
                <Typography  style={{color:'#323232', fontWeight:'500px', fontSize:'11px', fontFamily:'Poppins', textAlign:'center'}}>ETH</Typography>
                </Grid>
                <Grid style={{display:'flex', justifyContent:'center', alignItems:'center', width:'87px', height:'38px', borderRadius:'50px', backgroundColor:'#FFFFFF',  background: 'linear-gradient(114.46deg, #323232 38.61%, rgba(152, 152, 152, 0) 98.56%)',gap:'5px', border:'1px solid white'}}>
                <img src='/Images/BnB.png'/>
                <Typography  style={{color:'white', fontWeight:'500px', fontSize:'11px', fontFamily:'Poppins', textAlign:'center'}}>BNB</Typography>
                </Grid>
                <Grid style={{display:'flex', justifyContent:'center', alignItems:'center', width:'87px', height:'38px', borderRadius:'50px', backgroundColor:'#FFFFFF',  background: 'linear-gradient(114.46deg, #323232 38.61%, rgba(152, 152, 152, 0) 98.56%)',gap:'5px', border:'1px solid white'}}>
                <img src='/Images/Ustd.png'/>
                <Typography  style={{color:'white', fontWeight:'500px', fontSize:'11px', fontFamily:'Poppins', textAlign:'center'}}>USDT</Typography>
                </Grid>
              </Grid>
              </Grid>
              <Grid style={{display:'flex', justifyContent:'center', alignItems:'center' ,justifyContent:'space-between', marginTop:'15px'}}>
                <Typography style={{fontWeight:'500px', fontSize:'8px', lineHeight:'12px',fontFamily:'Poppins', color:' #8D8A8A', marginLeft:'39px',}}>Pay with ETH</Typography>
                <Typography style={{fontWeight:'700px' ,fontSize:'8px',lineHeight:'12px',fontFamily:'Poppins', color:'white'}} >MAX</Typography>
                <Typography style={{fontWeight:'500px', fontSize:'8px', lineHeight:'12px',fontFamily:'Poppins', color:' #8D8A8A', marginRight:'123px'}}>Pay with ETH</Typography>
              </Grid>
              <Grid style={{display:'flex' ,justifyContent:'center', alignItems:'center',gap:'16px', marginTop:'7px'}}>
              <Grid style={{width:'135px', height:'38px', borderRadius:'50px', border:'1px solid', borderColor:'white', display:'flex' ,alignItems:'center' ,justifyContent:'end' }}>
                <img style={{marginRight:'9px' }} src='./Images/Blackmob.png'/>
              </Grid>
              <Grid style={{width:'135px', height:'38px', borderRadius:'50px', border:'1px solid', borderColor:'white', display:'flex' ,alignItems:'center' ,justifyContent:'end' }}>
                <img style={{marginRight:'9px', backgroundColor:'#139ED5', width:'21px' ,height:'21px', borderRadius:'100px'}} src='./Images/Vector.png'/>
              </Grid>
              </Grid> 
              <Grid style={{width:'286px', height:'38px', borderRadius:'50px', padding:'11px 21px', backgroundColor:'#139ED5', display:'flex', justifyContent:'center',alignItems:'center', marginTop:'13px', marginLeft:'37px'}}>
                <Typography style={{fontSize:'10px', fontWeight:'600px' ,lineHeight:'15px', color:'#FFFFFF'}}>connect wallet</Typography>
              </Grid>
            </Grid>
            </Grid>
    </Grid>
    <MediaCard/>
   </>
  )
}

export default HeroCard