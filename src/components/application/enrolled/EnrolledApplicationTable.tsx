import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EnrolledApplicationRow from 'components/application/enrolled/EnrolledApplicationRow';
import ApiService from 'utils/ApiService';
import { enrollmentStatus } from 'constants/api';
import { Enrollment } from 'utils/ApiServiceTypings';


const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



const EnrolledApplicationTable = () => {
    const classes = useStyles();
    const [ enrolledApplications, setEnrolledApplications ] = React.useState<Enrollment[]>([])

    React.useEffect(()=>{
        const fetchDataHelper = async ()=>{
            try {
                const data = await ApiService.getEnrollment({
                    status: enrollmentStatus.ENROLLED
                })
                return data
            } catch (error) {
                console.log(error);
                return []
            }
        }
        const setEnrolledApplicationHelper = async ()=>{
            const data = await fetchDataHelper();
            if (data) {
                setEnrolledApplications(data);
            }
        }

        setEnrolledApplicationHelper()
    }, [])


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Username</StyledTableCell>
                    <StyledTableCell align="center">Role</StyledTableCell>
                    <StyledTableCell align="center">Event Instance</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Reject</StyledTableCell>
                    <StyledTableCell align="center">Revert</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {enrolledApplications.map((application) => (
                        <EnrolledApplicationRow 
                            application={application}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EnrolledApplicationTable;