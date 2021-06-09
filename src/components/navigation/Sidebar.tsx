import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core'


const useStyles = makeStyles({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
})

const Sidebar = () => {
    const classes = useStyles()

    return (
        <div className={classes.sidebar}>

        </div>
    )
}

export default Sidebar;