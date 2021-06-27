import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { EnrollmentResult } from 'utils/ApiServiceTypings';
import { enrollmentStatus, eventRole } from 'constants/api';
import Button from '@material-ui/core/Button';
import ApiService from 'utils/ApiService';


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


const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

interface IProps {
  application: EnrollmentResult,
}


const EnrolledApplicationRow = (props: IProps) => {  

  const displayStatusHelper = () => {
    if (props.application.status === 2) {
      return "Enrolled"
    } 
    return "Pending"
  }

  const reject = async (event: React.FormEvent)=>{
    const data = {
      id: props.application.id,
      username: props.application.user.username,
      eventInstanceCode: props.application.eventInstance,
      role: props.application.role,
      status: enrollmentStatus.REJECTED
    }
    await ApiService.updateEnrollment(data)
    window.location.reload();
  }

  const revert = async (event: React.FormEvent)=>{
    const data = {
      id: props.application.id,
      username: props.application.user.username,
      eventInstanceCode: props.application.eventInstance,
      role: props.application.role,
      status: enrollmentStatus.PENDING
    }
    await ApiService.updateEnrollment(data)
    window.location.reload();
  }

  const getRole = ()=>{
    if (props.application.role === eventRole.PARTICIPANT) {
      return "Participant"
    } else if (props.application.role === eventRole.FACILITATOR) {
      return "Facilitator"
    } else if (props.application.role === eventRole.COORDINATOR) {
      return "Coordinator"
    } else if (props.application.role === eventRole.EVENT_ADMIN) {
      return "Event Admin"
    } else if (props.application.role === eventRole.LEAD) {
      return "Lead"
    } else {
      return "Unknown"
    }
  }


  return (
    <>
      <StyledTableRow key={props.application.id}>
        <StyledTableCell align="center">{props.application.id}</StyledTableCell>
        <StyledTableCell align="center">{`${props.application.user.first_name} ${props.application.user.last_name}`}</StyledTableCell>
        <StyledTableCell align="center">{props.application.user.email}</StyledTableCell>
        <StyledTableCell align="center">{props.application.user.username}</StyledTableCell>
        <StyledTableCell align="center">{getRole()}</StyledTableCell>
        <StyledTableCell align="center">{props.application.eventInstance}</StyledTableCell>
        <StyledTableCell align="center">{displayStatusHelper()}</StyledTableCell>
        <StyledTableCell align="center">
        <Button variant="contained" color="primary" onClick={reject}>
          Reject
        </Button>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button variant="contained" color="secondary" onClick={revert}>
            Revert
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    </>
  )
}

export default EnrolledApplicationRow