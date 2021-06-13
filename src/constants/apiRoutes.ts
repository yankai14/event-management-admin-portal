interface ApiRoutes {
    LOGIN: string,
    ENROLLMENT: string,
    EVENT: string
}

const apiRoutes: ApiRoutes = {
    LOGIN: '/auth/login',
    ENROLLMENT: '/enrollment',
    EVENT: '/event'
}

export default apiRoutes