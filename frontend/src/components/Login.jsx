import React, { memo } from "react";

import { Link, useHistory } from "react-router-dom";

// importing redux related stuff
import { connect } from "react-redux";
import { userLoginSuccess, userLogout } from "../store/user/action";

// importing axios
import axios from "axios";

// importing formik and yup for form validation
import * as Yup from "yup";
import { Formik, Form } from "formik";

// importing actions
import { csrftoken } from "../common/getCsrfToken";

// importing components
import TextField from "./TextField";

function Login({ userLoginSuccess, userLogout, ...props }) {
  let history = useHistory();

  const validate = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (value, actions) => {
    axios({
      method: "POST",
      url: "../auth/api/login",
      data: value,
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    })
      .then((res) => {
        const data = {
          ...res.data.user,
          token: res.data.token,
        };
        userLoginSuccess(data);
        history.push("/");
      })
      .catch((err) => {
        userLogout();
        const error = err.response.data.non_field_errors[0];
        // resetting the form
        actions.setStatus({
          message: error,
        });
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {props.location.state && (
          <div className="col-12">
            <div
              className={"alert" + " alert-" + props.location.state.type}
              role="alert"
            >
              {props.location.state.message}
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h2 className="fs-1 mb-5">Login</h2>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
          >
            {({ status }) => (
              <Form>
                <TextField label="Username" name="username" type="text" />
                <TextField label="Password" name="password" type="password" />
                {status && status.message && (
                  <small className="text-danger">{status.message}</small>
                )}
                <p className="text-muted">
                  Don't have an account?
                  <Link to="/register" className="ms-1">
                    Register
                  </Link>
                </p>
                <button className="btn btn-dark mt-3 float-end" type="submit">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  userLoginSuccess: (payload) => userLoginSuccess(payload),
  userLogout: () => userLogout(),
};

export default connect(null, mapDispatchToProps)(memo(Login));
