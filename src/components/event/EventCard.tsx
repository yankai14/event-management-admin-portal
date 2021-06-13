import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Grid,
  Box,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EventResult } from 'utils/ApiServiceTypings';
import routes from 'constants/routes'

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
    event: EventResult
}

const EventCard = (props: IProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography align="center" color="textPrimary" gutterBottom variant="h5">
                    {props.event.name}
                </Typography>
                <Typography align="center" color="textPrimary" gutterBottom variant="h6">
                    {props.event.eventCode}
                </Typography>
                <Typography align="center" color="textPrimary" variant="body1">
                    {props.event.description}
                </Typography>
            </CardContent>
            <div>
                <Divider />
                <Box p={2}>
                    <Grid container spacing={2} className={classes.boxItems}>
                        <Link href={routes.HOME}>
                            See Event Instances
                        </Link>
                    </Grid>
                </Box>
            </div>
        </Card>
    )
}

export default EventCard;