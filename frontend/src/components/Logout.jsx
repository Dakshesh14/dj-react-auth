import React, {
    memo,
    useEffect
} from 'react';

import {
    Link,
} from 'react-router-dom';

// importing redux related stuff
import { userLogout } from '../store/user/action';
import { connect } from 'react-redux';

function Logout({ userLogout }) {

    useEffect(() => {
        userLogout();
    }, [])

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <h2>You have been logout</h2>
                <hr />
                <p className="text-muted">You have been logout. <Link to="/login">Login back.</Link></p>
            </div>
        </div>
    )
}


const mapDispatchToProps = {
    userLogout: () => userLogout(),
}

export default connect(
    null,
    mapDispatchToProps,
)(memo(Logout))