interface ApiRoutes {
    LOGIN: string
    ENROLLMENT: string
    ENROLLMENT_UPDATE: string
    EVENT: string
    EVENT_INSTANCE: string
}

const apiRoutes: ApiRoutes = {
    LOGIN: '/auth/login',
    ENROLLMENT: '/enrollment',
    ENROLLMENT_UPDATE: '/enrollment-update',
    EVENT: '/event',
    EVENT_INSTANCE: '/event-instance'
}

export default apiRoutes