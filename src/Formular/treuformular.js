import React from 'react' 
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import backgnd from './bg2.jpg'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class fromular extends React.Component{
    render(){
        return(
            <div>
<Box
        p={3}
        position="absolute"
        top={100}
        left="20%"
        zIndex="modal"
      >
           <Typography variant="h3" style={{ color: "#ffffff"}} gutterBottom>
                {this.props.titel} </Typography>
                </Box>

<Card style={{width: '100%', height: 400}}>

<img src={backgnd} style={{position:'realtive'}}/>
    </Card>

{/* <img src={backgnd} style={{position:'realtive'}}/>    */}
      
    
    <Box
        p={2}
        position="absolute"
        top={0}
        left="10%"
        zIndex="modal"
      >
        <Paper elevation={6} style={{width: 1200, height: 700, marginTop:300 }}>

            {/* HIER SOLLEN ALLE TEXTFELDER HIN */}

            <div name="Art der person" style={{marginLeft: 500, marginTop: 50 }}> 
            <Typography variant="h6" style={{ color: "#ffffff"}} gutterBottom>
                Person  </Typography>
                </div>

             <div name="persönliche informationen" style={{marginLeft: 500, marginTop: 50 }}> 
                <TextField
                id="outlined-helperText"
                label="Fanileinname"
                defaultValue=""
                helperText="Text eingeben"
                />
                </div>

                </Paper>
      </Box>


                
    </div>
    )
        }
}

export default fromular;
