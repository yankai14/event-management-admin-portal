import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import { EventInstance } from 'utils/ApiServiceTypings';
import moment from 'moment'
import ApiService from 'utils/ApiService';
import { Grid, IconButton } from '@material-ui/core';

interface IProps {
  eventInstance: EventInstance
}

const UpdateEventInstanceModal = (props: IProps) => {
  const [open, setOpen] = React.useState(false);
  const [eventInstance, setEventInstance] = React.useState<EventInstance>(props.eventInstance)

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangeEventInstanceCode = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEventInstance(prevState => ({
      ...prevState,
      eventInstanceCode: event.target.value
    }))
  }

  const handleChangeFee = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEventInstance(prevState => ({
      ...prevState,
      fee: event.target.value
    }))
  }

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

  const handleSubmit = async () => {
    const payload = {
      ...eventInstance,
      eventCode: eventInstance.event
    }
    await ApiService.updateEventInstance(props.eventInstance.eventInstanceCode, payload)
    handleClick()
  }

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        Edit Event Instance
      </Button>
      <Dialog open={open} onClose={handleClick} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Event Instance Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update this event instance, just change the values in the inputs and click on the submit button.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="eventInstanceCode"
              label="Event Instance Code"
              type="text"
              onChange={handleChangeEventInstanceCode}
              defaultValue={eventInstance.eventInstanceCode}
              fullWidth
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="fee"
              label="Fee"
              type="number"
              onChange={handleChangeFee}
              defaultValue={eventInstance.fee}
              fullWidth
              required
            />
            {eventInstance.dates.map((date, index) => {
              return (
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
              )
            })}
            <Button onClick={handleAddSchedule} color="primary">
              Add Classes
            </Button>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default UpdateEventInstanceModal;