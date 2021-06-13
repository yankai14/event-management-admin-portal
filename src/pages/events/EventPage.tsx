import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ApiService from 'utils/ApiService';
import { EventResult } from 'utils/ApiServiceTypings';
import EventCard from 'components/event/EventCard';
import { useHistory } from 'react-router';
import routes from 'constants/routes';


const useStyles = makeStyles({
    body: {
        minHeight: '100%',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});


const EventPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [ events, setEvents ] = React.useState<EventResult[]>([]);

    React.useEffect(()=>{
        const fetchDataHelper = async ()=>{
            try {
                const data = await ApiService.getEvent()
                return data
            } catch (error) {
                console.log(error);
                return []
            }
        }
        const setEventsHelper = async ()=>{
            const data = await fetchDataHelper();
            if (data) {
                setEvents(data);
            }
        }

        setEventsHelper()
    }, []);

    const onClickHandler = ()=>{
        history.push(routes.CREATE_EVENT);
    }

    return (
        <>
            <Box py={3} className={classes.body}>
                <Container>
                    <Box className={classes.toolBar}>
                        <Button color='primary' variant='contained' onClick={onClickHandler}>
                            Create New Event
                        </Button>
                    </Box>
                    <Box pt={3}>
                        <Grid container spacing={3}>
                            {events.map((event)=>(
                                <Grid item key={event.id} lg={4} md={6} xs={12}>
                                    <EventCard event={event}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
};

export default EventPage;