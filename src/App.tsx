import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Navigation from './components/Navigation';
import TodosPage from "./pages/TodosPage";

const App = () => (
    <Router>
        <Navigation/>
        <Route exact path={ROUTES.TODOS} component={TodosPage}/>
    </Router>
)

export default App;
