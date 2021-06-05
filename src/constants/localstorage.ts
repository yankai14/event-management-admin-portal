/**
 * File containing various localstorage name references used by this app.
 * */


interface LOCAL_STORAGE_KEY {
    AUTH_TOKEN: string,
    USERNAME: string
};


const localStorageKey: LOCAL_STORAGE_KEY = {
    AUTH_TOKEN: 'authToken',
    USERNAME: 'username'
}

export default localStorageKey