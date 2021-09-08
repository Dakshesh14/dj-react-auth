import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';



function App() {

    return (
        <h1>Hello World</h1>
        // <Router>
        //     <Navbar />
        //     <Switch>
        //         <Route exact path="/" component={Home} />
        //         <Route exact path="/menu" component={Menu} />
        //         <Route exact path="/my-cart" component={UserCart} />
        //     </Switch>
        //     <Footer />
        // </Router>
    )
}

export default App