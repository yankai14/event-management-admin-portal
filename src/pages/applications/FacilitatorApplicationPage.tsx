import React from 'react';
import { Grid, Box } from '@material-ui/core';
import PendingApplicationTable from 'components/application/pending/PendingApplicationTable';
import EnrolledApplicationTable from 'components/application/enrolled/EnrolledApplicationTable';


const FacilitatorApplicationPage = () => {

    return (
        <Box my={5}>
            <Grid container justify="center" spacing={7}>
                <h2>Facilitators Applications</h2>
                <Grid item 
                    md={11}
                    xs={12}>
                    <PendingApplicationTable/>
                </Grid>

                <Grid item 
                    md={11}
                    xs={12}>
                    <EnrolledApplicationTable/>
                </Grid>
                
            </Grid>
        </Box>
    )
   
}


export default FacilitatorApplicationPage;