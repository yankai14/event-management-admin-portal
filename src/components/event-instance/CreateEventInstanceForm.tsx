import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ApiService from 'utils/ApiService';
import { UpdateEventInstanceInput } from 'utils/ApiServiceTypings';
import { useHistory, useParams } from 'react-router-dom';
import routes from 'constants/routes';
import moment from 'moment';


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

interface IRouteParams {
    eventCode: string
}

const CreateEventForm = () => {

  const classes = useStyles();
  const { eventCode } = useParams<IRouteParams>()
  const history = useHistory();
  const [eventInstance, setEventInstance] = React.useState<UpdateEventInstanceInput>({
    eventCode: eventCode,
    eventInstanceCode: '',
    startDate: '',
    endDate: '',
    location: '',
    dates: [],
    fee: '',
    isCompleted: false,
    vacancy: 10
  })

  const handleChangeDates = (index: number, value: string) => {
    if (eventInstance.dates.length > 0) {
      setEventInstance(prevState => {
        prevState.dates[index] = value
        return {
          ...prevState,
        }
      })
    } else {
      setEventInstance(prevState => {
        return {
          ...prevState,
          dates: [value]
        }
      })
    }
  }

  const handleAddSchedule = () => {
    setEventInstance(prevState => {
      prevState.dates.push('')
      return {
        ...prevState,
      }
    })
  }

  const handleDeleteSchedule = (index: number) => {
    setEventInstance(prevState => {
      prevState.dates.splice(index, 1)
      return {
        ...prevState,
      }
    })
  }    

  const onSubmitHandler = async () => {
    console.log(eventInstance)
    await ApiService.createEventInstance(eventInstance)
    history.push(routes.EVENT)
  }

  return (
    <div className={classes.form}>
      <Typography variant="h6" gutterBottom>
        Note:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Event can have many event instances aka classes. One example of an event is APG while its event instances is 
        APG1, APG2 etc. Please head over to the event page if you need to create an event instead of
        an event instance. 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
           <TextField
              autoFocus
              margin="dense"
              id="fee"
              label="Fee"
              type="number"
              onChange={event=>setEventInstance(prevState => ({
                ...prevState,
                fee: event.target.value
              }))}
              fullWidth
              required
            />
        </Grid>
        <Grid item xs={12} sm={12}>
           <TextField
              autoFocus
              margin="dense"
              id="eventInstanceCode"
              label="Event Instance Code"
              type="text"
              onChange={event=>setEventInstance(prevState => ({
                ...prevState,
                eventInstanceCode: event.target.value
              }))}
              fullWidth
              required
            />
        </Grid>
        <Grid item xs={12} sm={12}>
           <TextField
              autoFocus
              margin="dense"
              id="Location"
              label="Location"
              type="text"
              onChange={event=>setEventInstance(prevState => ({
                ...prevState,
                location: event.target.value
              }))}
              fullWidth
              required
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
              autoFocus
              margin="dense"
              id="vacancy"
              label="Vacancy"
              type="number"
              onChange={event=>setEventInstance(prevState => ({
                ...prevState,
                vacancy: Number.parseInt(event.target.value)
              }))}
              fullWidth
              required
            />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            autoFocus
            margin="dense"
            label="Start Date"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event=>setEventInstance(prevState => ({
              ...prevState,
              startDate: event.target.value
            }))}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            autoFocus
            margin="dense"
            label="End Date"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
             onChange={event=>setEventInstance(prevState => ({
              ...prevState,
              endDate: event.target.value
            }))}
          />
        </Grid>
        {eventInstance.dates.map((date, index) => {
          return (
            <Grid item xs={12} sm={12}>
              <Grid container>
                <Grid xs={11}>
                  <TextField
                    autoFocus
                    key={index.toString()}
                    margin="dense"
                    label="Class"
                    type="datetime-local"
                    fullWidth
                    defaultValue={moment(date).format('YYYY-MM-DDTHH:mm')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={event=>handleChangeDates(index, event.target.value)}
                  />
                </Grid>
                <Grid xs={1}>
                  <IconButton aria-label="delete" onClick={()=>handleDeleteSchedule(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
        <Button onClick={handleAddSchedule} color="primary">
          Add Classes
        </Button>
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