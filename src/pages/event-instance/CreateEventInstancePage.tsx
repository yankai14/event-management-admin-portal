import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CreateEventInstanceForm from 'components/event-instance/CreateEventInstanceForm';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const CreateEventInstancePage = () => {
    const classes = useStyles();

    return (
        <Container>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h4' align='center'>
                    Create New Event Instance
                </Typography>
                <CreateEventInstanceForm />
            </Paper>
        </Container>
    )
}


export default CreateEventInstancePage;