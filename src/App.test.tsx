import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import App from './App';
import localStorageKey from 'constants/localstorage'
import routes from 'constants/routes';


describe('Test For App component', ()=>{
    describe('Authenticated user', ()=>{
        test('User tries to login again but is redirected back to home', ()=>{
            const history = createMemoryHistory();
            localStorage.setItem(localStorageKey.AUTH_TOKEN, 'someToken');
            localStorage.setItem(localStorageKey.USERNAME, 'someUsername');
            history.push(routes.LOGIN);
            render(
                <Router history={history}>
                    <App />
                </Router>
            );
            expect(history.location.pathname).toEqual(routes.HOME);
        })
    })
})