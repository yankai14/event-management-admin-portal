import React, {Dispatch, SetStateAction} from 'react';

export interface AuthContextState {
    authToken: null | string,
    isAuthenticated: boolean,
    username: null | string
}

export interface AuthStateProperties {
    authState: AuthContextState,
    setAuthState: Dispatch<SetStateAction<AuthContextState>>
}

export const authContextDefaultValue: AuthStateProperties = {
    authState: {
        authToken: null,
        isAuthenticated: false,
        username: null
    },
    setAuthState: (state) => {}
}

const AuthContext = React.createContext<AuthStateProperties>(authContextDefaultValue);


export default AuthContext;