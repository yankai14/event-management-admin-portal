interface Routes {
    HOME: string
    LOGIN: string
    FACILITATOR_APPLICATION: string
    EVENT: string
    CREATE_EVENT: string
    EVENT_INSTANCE: string
}

const routes: Routes = {
    HOME: '/',
    LOGIN: '/login',
    FACILITATOR_APPLICATION: '/applications/facilitators',
    EVENT: '/event',
    CREATE_EVENT: '/event/create',
    EVENT_INSTANCE: '/event-instance'
}

export default routes