import React, { memo } from 'react';

// importing redux related stuff
import { connect } from 'react-redux';

function Home({ user }) {

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h2>Hello {user.user.username}</h2>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state,
})

export default connect(
    mapStateToProps,
    null,
)(memo(Home))