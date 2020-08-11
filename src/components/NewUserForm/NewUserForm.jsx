import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  nickName: Yup.string(),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

class NewUserForm extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            nickName: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              let url = process.env.REACT_APP_API_URL;
              fetch(`${url}/users/create`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  this.props.history.push(`/additionalinfo/${data.id}`);
                });

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="firstName"
                  name="firstName"
                  className={`form-control ${
                    touched.firstName && errors.firstName ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="lastName"
                  name="lastName"
                  className={`form-control ${
                    touched.lastName && errors.lastName ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nickName">Nickname (optional)</label>
                <Field
                  type="nickName"
                  name="nickName"
                  className={`form-control ${
                    touched.nickName && errors.nickName ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Please wait..." : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default withRouter(NewUserForm);
