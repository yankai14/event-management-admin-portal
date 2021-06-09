export interface User {
    username: string,
    email: string,
    first_name: string,
    last_name: string
}

export interface EnrollmentResult {
    id: number,
    user: User,
    eventInstance: string,
    role: number,
    status: number,
    paymentId: string,
    paymentPlatform: string
}

export interface EnrollmentQueryParams {
    role: number,
    status: number,
    eventInstance?: number
}

export interface EnrollmentPayload {
    id: number,
    username: string,
    eventInstanceCode: string,
    role: number,
    status: number
}

export interface ListResponseEnrollment {
    count: number,
    next: string,
    previous: string,
    results: EnrollmentResult[]
}