import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Container, dividerClasses, Grid, IconButton, iconButtonClasses } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import { DeleteOutlined } from '@mui/icons-material';
import { grid, typography } from '@mui/system';



var cardStyle = {
    display: 'block',
    width: '22vw',
    transitionDuration: '0.3s',
    
    backgroundColor :'	#f2f2f2',
    marginBottom: '1rem',
}




export default function NotecCard(props) {
    const { title , paragraph, } = props;
  return (
    
    <Card style={cardStyle} >
   

         <Grid Card spacing={5}  > 
        <Card  > 
            <CardHeader
                 action= { 
                    <IconButton>
                        <DeleteOutlined/>
                    </IconButton>
                 }
                 


                 />
                    {title}
            <CardContent>
                <typography  color="textSecondary">
                {paragraph}
                </typography>
            </CardContent>
         </Card>
         

    </Grid>
        

  
    </Card>
  );
}
