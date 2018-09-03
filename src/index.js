import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import AppShell from './components/AppShell';

ReactDOM.render(
    <Provider store={store}>
        <AppShell />
    </Provider>,
    document.getElementById('root'));
