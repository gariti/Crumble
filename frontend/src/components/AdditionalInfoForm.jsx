import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Thumb from "./Thumb";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AdditionalInfoSchema = Yup.object().shape({
  nickName: Yup.string(),
  bio: Yup.string(),
});

class AdditionalInfoForm extends Component {
  render() {
    return (
      <div>
        <h1>Join Your Community!</h1>
        <h3>
          Please provide a little bit more about yourself so others can get to
          know you. (this is optional)
        </h3>
        <Link to={`/home/${this.props.match.params.id}`}>Skip</Link>
        <Formik
          initialValues={{
            bio: "",
            nickName: "",
            photo: null,
          }}
          validationSchema={AdditionalInfoSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(
                JSON.stringify(
                  {
                    fileName: values.photo.name,
                    type: values.photo.type,
                    size: `${values.photo.size} bytes`,
                  },
                  null,
                  2
                )
              );

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ touched, errors, isSubmitting, setFieldValue, values }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Bio</label>
                <Field
                  type="bio"
                  name="bio"
                  className={`form-control ${
                    touched.bio && errors.bio ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nickName">Nickname</label>
                <Field
                  type="nickName"
                  name="nickName"
                  className={`form-control ${
                    touched.nickName && errors.nickName ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">Photo Upload</label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                  className="form-control"
                />
                <Thumb file={values.file} />
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
export default withRouter(AdditionalInfoForm);
