interface Routes {
    HOME: string
    LOGIN: string
    FACILITATOR_APPLICATION: string
    EVENT: string
    CREATE_EVENT: string
}

const routes: Routes = {
    HOME: '/',
    LOGIN: '/login',
    FACILITATOR_APPLICATION: '/applications/facilitators',
    EVENT: '/event',
    CREATE_EVENT: '/event/create',
}

export default routes