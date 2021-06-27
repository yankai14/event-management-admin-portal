interface Routes {
    HOME: string
    LOGIN: string
    APPLICATION: string
    EVENT: string
    CREATE_EVENT: string
    EVENT_INSTANCE: string,
    CREATE_EVENT_INSTANCE: string
}

const routes: Routes = {
    HOME: '/',
    LOGIN: '/login',
    APPLICATION: '/applications',
    EVENT: '/event',
    CREATE_EVENT: '/event-create',
    EVENT_INSTANCE: '/event-instance',
    CREATE_EVENT_INSTANCE: '/event-instance-create'
}

export default routes