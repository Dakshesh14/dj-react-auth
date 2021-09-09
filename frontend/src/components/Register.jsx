import React, {
    memo,
    useState,
} from 'react';

import {
    Link,
    useHistory
} from 'react-router-dom';

// importing actions
import { csrftoken } from '../common/getCsrfToken'

// importing axios
import axios from 'axios';

// importing redux related stuff
import { connect } from 'react-redux';
import { userRegisterSuccess, userLogout } from '../store/user/action';

// importing formik and yup for form validation
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

// importing components
import TextField from './TextField';

function Register({ userRegisterSuccess, userLogout }) {

    const [error, setError] = useState(null);

    let history = useHistory();

    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 charaters')
            .required('Password is required')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

    const handleSubmit = (value) => {
        setError(null)
        axios({
            method: "POST",
            url: "../auth/api/register",
            data: value,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        }).then(res => {
            const data = {
                ...res.data.user,
                token: res.data.token,
            }
            userRegisterSuccess(data);
            history.push('/')
        }).catch(err => {
            userLogout();
            setError(err.response.data.username[0]);
        })
    }

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h2 className="fs-1 mb-5">
                        Register
                    </h2>
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => handleSubmit(values)}
                    >
                        <Form>
                            <TextField label="Username" name="username" type="text" />
                            {error && <small className="text-danger">{error}</small>}
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <small className="form-text text-muted">
                                <ul className="list-unstyled">
                                    <li>Your password must contain at least 8 characters.</li>
                                    <li> One Uppercase, One Lowercase, One Number and one special case Character</li>
                                </ul>
                            </small>
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <p className="text-muted">
                                Already have an account?
                                <Link to="/login" className="ms-1">Login</Link>
                            </p>
                            <button className="btn btn-dark mt-3 float-end" type="submit">Register</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    userRegisterSuccess: (payload) => userRegisterSuccess(payload),
    userLogout: () => userLogout(),
}


export default connect(
    null,
    mapDispatchToProps,
)(memo(Register))