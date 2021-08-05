export interface User {
    username: string
    email: string
    first_name: string
    last_name: string
}

export interface Enrollment {
    id: number
    user: User
    eventInstance: EventInstance
    role: number
    status: number
    paymentId: string
    paymentPlatform: string
}

export interface GetListEnrollmentQueryParams {
    role?: number
    status?: number
    eventInstance?: number
}

export interface EnrollmentInput {
    id: number
    username: string
    eventInstanceCode: string
    role: number
    status: number
}

export interface GetListEnrollmentOutput {
    count: number
    next: string
    previous: string
    results: Enrollment[]
}

export interface Event {
    id: number
    eventCode: string
    name: string
    description: string
}

export interface GetListEventOutput {
    count: number
    next: string
    previous: string
    results: Event[]
}

export interface CreateEventInput {
    eventCode: string
    name: string
    description: string
}

export interface CreateEventOutput {
    id: number
    eventCode: string
    name: string
    description: string
}

export interface GetEventInstanceParams {
    event?: string
}

export interface EventInstance {
    id: number
    event: string
    eventInstanceCode: string
    startDate: string
    endDate: string
    location: string
    dates: string[]
    fee: string
    isCompleted: boolean
    vacancy: number
}

export interface GetEventInstanceOutput {
    count: number
    next: string
    previous: string
    results: EventInstance[]
}

export interface UpdateEventInstanceInput {
    eventCode: string
    eventInstanceCode: string
    startDate: string
    endDate: string
    location: string
    dates: string[]
    fee: string
    isCompleted: boolean
    vacancy: number
}