import React from 'react';
import { EnrollmentPayload } from 'utils/ApiServiceTypings';


export interface ApplicationContextProperties {
    enrollmentUpdates: EnrollmentPayload[],
    setEnrollmentUpdates: React.Dispatch<React.SetStateAction<EnrollmentPayload[]>>
}

export const applicationContextDefaultValue: ApplicationContextProperties = {
    enrollmentUpdates: [],
    setEnrollmentUpdates: (state) => {}
}


const ApplicationContext = React.createContext<ApplicationContextProperties>(applicationContextDefaultValue);

export default ApplicationContext;