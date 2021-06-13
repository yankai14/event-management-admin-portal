import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ApiService from 'utils/ApiService';
import { CreateEventInput } from 'utils/ApiServiceTypings';
import { useHistory } from 'react-router-dom';
import routes from 'constants/routes';


const useStyles = makeStyles((theme)=>({
    form: {
      width:"100%"
    },
    textArea: {
        width: "100%",
        height: "50px",
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(2),
    }
}));

const CreateEventForm = () => {

    const classes = useStyles();
    const history = useHistory();
    const [ eventName, setEventName ] = React.useState('');
    const [ eventCode, setEventCode ] = React.useState('');
    const [ eventDescription, setEventDescription ] = React.useState('');

    const onSubmitHandler = async (event: React.FormEvent) => {
      console.log("ewifhwioefwef")
      event.preventDefault();
      try {
        const payload: CreateEventInput =  {
          eventCode: eventCode,
          name: eventName,
          description: eventDescription
        } 
        const response = await ApiService.createEvent(payload)
        console.log(response)
        history.push(routes.EVENT)
      } catch(error) {
        console.log(error.message)
      }
    }

    return (
    <div className={classes.form}>
      <Typography variant="h6" gutterBottom>
        Note:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Event can have many event instances aka classes. One example of an event is APG while its event instances is 
        APG1, APG2 etc. Please head over to the event instance page if you need to create an event instance instead of
        an event. 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="eventName"
            name="eventName"
            label="Event Name"
            onChange={ event => setEventName(event.target.value) }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="eventCode"
            name="eventCode"
            label="Event Code"
            onChange={ event => setEventCode(event.target.value) }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description" 
            name="description" 
            label="Short description about event" 
            onChange={ event => setEventDescription(event.target.value) }
            fullWidth 
          />
        </Grid>
      </Grid>
      <Box display='flex' py={4} justifyContent='flex-end'>
        <Button 
          className={classes.button}
          onClick={()=>history.push(routes.EVENT)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onSubmitHandler}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}


export default CreateEventForm;