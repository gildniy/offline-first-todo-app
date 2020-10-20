import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './components/Firebase';
import * as serviceWorker from './serviceWorker';
import {FirebaseContext, TodoContext} from "./contexts";

ReactDOM.render(
    <React.StrictMode>
        <TodoContext.Provider value={[]}>
            <FirebaseContext.Provider value={firebase}>
                <App/>
            </FirebaseContext.Provider>
        </TodoContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
