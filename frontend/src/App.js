import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// importing protected route
import ProtectRoute from './common/ProtectRoute';

// importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <ProtectRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/Logout" component={Logout} />
            </Switch>
        </Router>
    )
}

export default App