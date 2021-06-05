import React from 'react';
import { act, waitFor, render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import ApiService from 'utils/ApiService';
import routes from 'constants/routes';
import localStorageKey from 'constants/localstorage'
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'


describe('Login Form Tests', ()=>{
    test('UI can render correctly', async ()=>{
        const { queryByTestId, queryByRole } = render(<LoginForm />)
        
        expect(queryByTestId('username')).toBeTruthy();
        expect(queryByTestId('password')).toBeTruthy();
        expect(queryByRole('button', {name:'Sign In'})).toBeTruthy()
        expect(queryByRole('link', {name: 'Forgot password?'})).toBeTruthy();
    })

    test('Form will login user upon submitting correct username and password', async ()=>{
        const mockLoginResponse = {token: 'testToken'};
        const testUser = {username: 'someUsername', password: 'somePassword'};
        const history = createMemoryHistory()
        jest.spyOn(ApiService, 'login').mockResolvedValue(mockLoginResponse);

        const { getByTestId, getByRole } = render(
            <Router history={history}>
                <LoginForm />
            </Router>
        );

        const usernameField = getByTestId('username');
        const passwordField = getByTestId('password');
        const signInButton = getByRole('button', {name: 'Sign In'});

        act(()=>{
            fireEvent.change(usernameField, {
                target: {
                    value: testUser.username
                }
            })

            fireEvent.change(passwordField, {
                target: {
                    value: testUser.password
                }
            })
        })

        act(()=>{
            userEvent.click(signInButton)
        })

        await waitFor(()=>expect(ApiService.login).toBeCalled());
        expect(history.location.pathname).toEqual(routes.HOME);
        expect(localStorage.getItem(localStorageKey.AUTH_TOKEN)).toBe(mockLoginResponse.token);
        expect(localStorage.getItem(localStorageKey.USERNAME)).toBe(testUser.username);
    })
})