interface ApiRoutes {
    LOGIN: string
    ENROLLMENT: string
    EVENT: string
    EVENT_INSTANCE: string
}

const apiRoutes: ApiRoutes = {
    LOGIN: '/auth/login',
    ENROLLMENT: '/enrollment',
    EVENT: '/event',
    EVENT_INSTANCE: '/event-instance'
}

export default apiRoutes