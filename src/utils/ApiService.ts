import axios from 'axios'
import apiRoutes from 'constants/apiRoutes'
import localStorageKey from 'constants/localstorage'
import { StatusCodes } from 'http-status-codes';

// Definitions for ApiService
const coreApiBaseUrl = "http://127.0.0.1:8000/"

export const coreApi = axios.create({
    baseURL: coreApiBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default class ApiService {
    /**
     * Method for setting authToken in header
     * @param authToken 
     */
    static setAuthTokenHeader = (authToken: string) => {
        coreApi.defaults.headers.common['Authorization'] = `Token ${authToken}`;
    }
    /**
     * Method for logging in existing user into the network
     * @param username 
     * @param password 
     * @returns 
     */
    static async login(username: string, password: string) {
        const loginParams = { username, password }
        try {
            const response = await coreApi.post(apiRoutes.LOGIN, loginParams)
            return response.data
        } catch(error) {
            if (error.response) {
                if (error.response.status === StatusCodes.BAD_REQUEST) {
                    ApiService.errorMessage("Invalid password or username")
                } else if (error.response.status >= 500) {
                    console.log(`Error Status Code: ${error.response.status} at ${apiRoutes.LOGIN}`)
                    console.log(error.message)
                    ApiService.errorMessage("Backend Error, please contact the administrator")
                }
            } else {
                ApiService.errorMessage();
            }
        }
    }
    /**
     * Method for saving access token and username to localstorage.
     * @param authToken 
     * @param username 
     */
    static saveAuthTokenAndUsernameToLocalStorage(authToken: string, username: string) {
        try {
            localStorage.setItem(localStorageKey.AUTH_TOKEN, authToken)
            localStorage.setItem(localStorageKey.USERNAME, username)
        } catch(err) {
            console.error(err)
        }
    }
    /**
     * Method for retrieving access token and username into localstorage.
     * @returns
     */
    static getAuthTokenAndUsernameFromLocalStorage() {
        const authToken: string|null = localStorage.getItem(localStorageKey.AUTH_TOKEN)
        const username: string|null = localStorage.getItem(localStorageKey.USERNAME)
        return {authToken, username}
    }
    /**
     * Method for removing access token and username from localstorage.
     */
    static removeAuthTokenFromLocalStorage() {
        try {
            localStorage.removeItem(localStorageKey.AUTH_TOKEN)
            localStorage.removeItem(localStorageKey.USERNAME)
        } catch (err) {
            console.error(err)
        }
    }
    /**
     * Helper method for alerting user of errors
     * @param errorMessage 
     */
    static errorMessage(errorMessage?: string) {
        errorMessage ? alert(errorMessage): alert('An error has occured, please contact the administrator');
    }

    
    
}