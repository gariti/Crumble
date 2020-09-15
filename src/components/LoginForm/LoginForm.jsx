import React, { useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "../../Firebase/Firebase";
import { AuthContext } from "../../Firebase/Auth";

function LoginForm() {
  const { register, handleSubmit, errors, setError } = useForm();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const onSubmit = async (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(function () {
        console.log("log in success");
        history.push(`/`);
      })
      .catch(function (error) {
        setError("firebase", {
          type: "manual",
          message: error.message,
        });
        console.error("Failed to Log in: ", error.message);
      });
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <form className="New User Form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Please log in:</h1>

      <label>Email:</label>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />

      {errors.email && errors.email.type === "required" && (
        <p>Email address is required to log in</p>
      )}

      {errors.email && errors.email.type === "pattern" && (
        <p>Email is not in a correct format</p>
      )}

      <label>Password:</label>
      <input
        name="password"
        type="password"
        ref={register({
          required: true,
          minLength: 6,
        })}
      />

      {errors.password && errors.password.type === "required" && (
        <p>Password is required</p>
      )}

      {errors.firebase && <p>{errors.firebase.message}</p>}
      <input type="submit" />
    </form>
  );
}

export default withRouter(LoginForm);
