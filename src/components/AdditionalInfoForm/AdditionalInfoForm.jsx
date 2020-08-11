import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Thumb from "./Thumb";
// import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

// const INITIAL_STATE = {
//   nickName: "",
//   bio: "",
//   photo: null,
// };

// function AdditionalInfoForm() {
//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     isSubmitting,
//   } = useFormValidation(INITIAL_STATE, validateAuth);
//   // const [email, setEmail] = React.useState("");
//   // const [password, setPassword] = React.useState("");

//   return (
//     <div className="container">
//       <h1>
//         Please provide a little bit more about yourself so others can get to //
//         know you. (this is optional)
//       </h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={handleChange}
//           onBlur={handleBlur}
//           name="nickName"
//           value={values.nickName}
//           className={errors.nickName && "error-input"}
//           autoComplete="off"
//           placeholder="Enter your nickname"
//         />
//         {errors.email && <p className="error-text">{errors.email}</p>}
//         <input
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.bio}
//           className={errors.bio && "error-input"}
//           name="bio"
//           type="bio"
//           placeholder="Enter anything else about yourself"
//         />
//         {errors.bio && <p className="error-text">{errors.bio}</p>}
//         <div>
//           <button disabled={isSubmitting} type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AdditionalInfoSchema = Yup.object().shape({
  nickName: Yup.string(),
  bio: Yup.string(),
});

export default function AdditionalInfoForm(props) {
  const [photo, setPhoto] = useState(null);

  return (
    <div>
      <h1>Join Your Community!</h1>
      <h3>
        Please provide a little bit more about yourself so others can get to
        know you. (this is optional)
      </h3>
      <Link to={`/home/${"props.match.params.id"}`}>Skip</Link>
      <Formik
        initialValues={{
          bio: "",
          nickName: "",
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
              <Field
                id="photo"
                name="photo"
                type="file"
                onChange={(event) => {
                  setPhoto(event.currentTarget.files[0]);

                  setFieldValue("photo", event.currentTarget.files[0]);

                  let reader = new FileReader();
                  reader.onloadend = () => {
                    return (
                      <img
                        src={event.currentTarget.files[0]}
                        alt={event.currentTarget.files[0].name}
                        className="img-thumbnail mt-2"
                        height={200}
                        width={200}
                      />
                    );
                  };

                  reader.readAsDataURL(event.currentTarget.files[0]);
                }}
                className="form-control"
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
