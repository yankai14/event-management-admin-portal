interface EventRole {
    PARTICIPANT: number,
    FACILITATOR: number,
    EVENT_ADMIN: number,
    COORDINATOR: number,
    LEAD: number
}

interface EnrollmentStatus {
    PENDING: number,
    ENROLLED: number,
    REJECTED: number,
    WITHDRAW: number
}

export const eventRole: EventRole = {
    PARTICIPANT: 1,
    FACILITATOR: 2,
    EVENT_ADMIN: 3,
    COORDINATOR: 4,
    LEAD: 5
}

export const enrollmentStatus: EnrollmentStatus = {
    PENDING: 1,
    ENROLLED: 2,
    REJECTED: 3,
    WITHDRAW: 4
}