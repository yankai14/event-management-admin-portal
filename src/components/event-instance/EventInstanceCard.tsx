import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { EventInstance } from 'utils/ApiServiceTypings';
import UpdateEventInstanceModal from 'components/event-instance/UpdateEventInstanceModal';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    content: {
        height: '320px'
    },
    boxItems: {
        justifyContent: 'center',
    },
});

interface IProps {
    eventInstance: EventInstance
}

const EventInstanceCard = (props: IProps) => {
    const classes = useStyles();

    const convertDateTimeFormat = (datetime: string)=>{
        return moment(datetime).format("DD-MM-YYYY")
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography align="center" color="textPrimary" gutterBottom variant="h5">
                    {props.eventInstance.eventInstanceCode}
                </Typography>
                <Typography align="center" color="textPrimary" gutterBottom variant="h6">
                    {convertDateTimeFormat(props.eventInstance.startDate)} ~ {convertDateTimeFormat(props.eventInstance.endDate)}
                </Typography>
                <Typography align="center" color="textPrimary" variant="body1">
                    Location: {props.eventInstance.location}
                </Typography>
                <Typography align="center" color="textPrimary" variant="body1">
                    Fees: S${props.eventInstance.fee}
                </Typography>
                <Typography align="center" color="textPrimary" variant="body1">
                    Schedule link
                </Typography>
                <Typography align="center" color="textPrimary" variant="body1">
                    Completed: {props.eventInstance.isCompleted.toString()}
                </Typography>
            </CardContent>
            <div>
                <Divider />
                <Box p={2}>
                    <Grid container spacing={2} className={classes.boxItems}>
                        <UpdateEventInstanceModal key={props.eventInstance.id} eventInstance={props.eventInstance}/>
                    </Grid>
                </Box>
            </div>
        </Card>
    )
}

export default EventInstanceCard;