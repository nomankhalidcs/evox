import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
  ],
}));

export default function MediaCard() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, display: 'flex', justifyContent: 'center' }}>



      <CardActions >


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <Typography sx={{ fontWeight: '700', fontSize: '13.93px', lineHeight: '20.89px', }}>Transactions History</Typography>
          <Grid sx={{ paddingTop: '24px' }}>
            <TextField
              variant='outlined'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                    border: 'none',
                    backgroundColor: '#565555',
                    width: '312px', height: '45.5px',
                    borderRadius: '9.29px'


                  },

                },
              }}
            />
            <TextField
              variant='outlined'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                    border: 'none',
                    backgroundColor: '#565555',
                    width: '312px', height: '45.5px',
                    borderRadius: '9.29px'

                  },

                },
              }}
            />
            <TextField
              variant='outlined'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                    border: 'none',
                    backgroundColor: '#565555',
                    width: '312px', height: '45.5px',
                    borderRadius: '9.29px'

                  },

                },
              }}
            />
            <TextField
              variant='outlined'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                    border: 'none',
                    backgroundColor: '#565555',
                    width: '312px', height: '45.5px',
                    borderRadius: '9.29px'

                  },

                },
              }}
            />
            <TextField
              variant='outlined'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                    border: 'none',
                    backgroundColor: '#565555',
                    width: '312px', height: '45.5px',
                    borderRadius: '9.29px'

                  },

                },
              }}
            />
            <TextField
              variant='outlined'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                    border: 'none',
                    backgroundColor: '#565555',
                    width: '312px', height: '45.5px',
                    borderRadius: '9.29px'

                  },

                },
              }}
            />
          </Grid>


        </CardContent>
      </Collapse>
    </Card>
  );
}    