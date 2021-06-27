import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ApiService from 'utils/ApiService';
import { EventInstance } from 'utils/ApiServiceTypings';
import EventInstanceCard from 'components/event-instance/EventInstanceCard';
import { useHistory } from 'react-router';
import routes from 'constants/routes';
import { useParams } from 'react-router';


const useStyles = makeStyles({
    body: {
        minHeight: '100%',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

interface IRouteParams {
    eventCode: string
}

const EventInstancePage = () => {
    const { eventCode } = useParams<IRouteParams>()
    const classes = useStyles();
    const history = useHistory();
    const [ eventInstances, setEventInstances ] = React.useState<EventInstance[]>([]);

    React.useEffect(()=>{
        console.log(eventCode)
        const fetchDataHelper = async ()=>{
            try {
                const data = await ApiService.getEventInstance({ event: eventCode })
                return data
            } catch (error) {
                console.log(error);
                return []
            }
        }
        const setEventsHelper = async ()=>{
            const data = await fetchDataHelper();
            if (data) {
                setEventInstances(data);
            }
        }

        setEventsHelper()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClickHandler = ()=>{
        history.push(`${routes.CREATE_EVENT_INSTANCE}/${eventCode}`);
    }

    return (
        <>
            <Box py={3} className={classes.body}>
                <Container>
                    <Box className={classes.toolBar}>
                        <Button color='primary' variant='contained' onClick={onClickHandler}>
                            Create New Event Instance
                        </Button>
                    </Box>
                    <Box pt={3}>
                        <Grid container spacing={3}>
                            {eventInstances.map((eventInstance)=>(
                                <Grid item key={eventInstance.id} lg={4} md={6} xs={12}>
                                    <EventInstanceCard key={eventInstance.id} eventInstance={eventInstance}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
};

export default EventInstancePage;