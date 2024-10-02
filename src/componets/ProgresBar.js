import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';

export default function ProgresBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{width:'100%', display:'flex', alignContent:'center', justifyContent:"center", marginTop:'6px'}}>
     

      <LinearProgress  style={{height:'6px',width:'270px',borderRadius:'50px', backgroundColor:'#4A4848'}}variant="determinate" value={progress} />
     
    </Box>
  );
}