import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import memoApp from './reducers';
import thunk from 'redux-thunk';


let store = createStore(
    memoApp,
    applyMiddleware(thunk)
);

let rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, rootElement);

