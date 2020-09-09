import React from "react";
import ReactDOM from "react-dom";
import { useForm }  from 'react-hook-form';
import firebase from '../../Firebase/Firebase'
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const { register, handleSubmit, errors, setError } = useForm();
  const history = useHistory()

  const onSubmit = async (values) => {
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
    .catch(function(error) {
      setError('firebase', {
        type: "manual",
        message: error.message
    });
      console.error("Failed to sign up: " , error.message);
    });

    history.push(`/additionalinfo/`);
  }

  return (
    <form className="New User Form" onSubmit={handleSubmit(onSubmit)}>
      <h1>New User Sign Up!</h1>

      <label>Email:</label>
      <input name="email" ref={register({ 
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       })}/>

      {errors.email && errors.email.type === "required" && (
        <p>Email address is required</p>
      )}

      {errors.email && errors.email.type === "pattern" && (
        <p>Email address must be in correct format</p>
      )}

      <label>Password:</label>
      <input name="password" type="password" ref={register({ 
        required: true,
        minLength: 6,
        // pattern: //TODO: match requirements from firebase auth
       })}/>

      {errors.password && errors.password.type === "required" && (
        <p>Password is required</p>
      )}

      {errors.password && errors.password.type === "pattern" && (
        <p>Password must meet requirements</p> //TODO: List requirements
      )}

      {errors.firebase && <p>{errors.firebase .message}</p>}
      <input type="submit"/>

    </form>
  );
}