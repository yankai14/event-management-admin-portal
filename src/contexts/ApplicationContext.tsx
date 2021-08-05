import React from 'react';
import { EnrollmentInput } from 'utils/ApiServiceTypings';


export interface ApplicationContextProperties {
    enrollmentUpdates: EnrollmentInput[],
    setEnrollmentUpdates: React.Dispatch<React.SetStateAction<EnrollmentInput[]>>
}

export const applicationContextDefaultValue: ApplicationContextProperties = {
    enrollmentUpdates: [],
    setEnrollmentUpdates: (state) => {}
}


const ApplicationContext = React.createContext<ApplicationContextProperties>(applicationContextDefaultValue);

export default ApplicationContext;