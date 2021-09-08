import React, { memo } from 'react';

import {
    Link,
} from 'react-router-dom';


import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

export default memo(function Login() {

    const validate = Yup.object({
        username: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Password is required')
    })


    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h2 className="fs-1 mb-5">
                        Login
                    </h2>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        <Form>
                            <TextField label="Username" name="username" type="text" />
                            <TextField label="Password" name="password" type="password" />
                            <p className="text-muted">
                                Don't have an account?
                                <Link to="/register" className="ms-1">Register</Link>
                            </p>
                            <button className="btn btn-dark mt-3 float-end" type="submit">Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
})
