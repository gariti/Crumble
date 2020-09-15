import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Thumb from "./Thumb";
// import { withRouter } from "react-router";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import firebase from "../../Firebase/Firebase";
import { useHistory, useRouteMatch, Link } from "react-router-dom";

export default function EditProfile() {
  const { register, handleSubmit, errors, setError } = useForm();
  const history = useHistory();

  const updateUser = (values) => {
    var db = firebase.firestore();

    //TODO: use user info from userContext
    // const userRef = db.collection("users").doc(match.params.id);

    // const res = userRef.update({...values})
    // .catch(function(error) {
    //     console.error("Error updating document: ", error);
    // });

    // console.log("Document updated: ", userRef.id);
    history.push(`/home/`);
  };

  return (
    <form
      className="Additional Information Form"
      onSubmit={handleSubmit(updateUser)}
    >
      <h1>Join Your Community!</h1>
      <h3>
        Please provide a little bit more about yourself so others can get to
        know you.
      </h3>

      <label>First Name:</label>
      <input
        name="firstName"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 60,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      {errors.firstName && errors.firstName.type === "required" && (
        <p>First Name is required</p>
      )}
      {errors.firstName && errors.firstName.type === "minLength" && (
        <p>First name must be at least 2 characters</p>
      )}

      {errors.firstName && errors.firstName.type === "pattern" && (
        <p>First name must be letters only</p>
      )}

      <label>Last Name:</label>
      <input
        name="lastName"
        ref={register({
          required: true,
          minLength: 2,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <p>Last name is required</p>
      )}
      {errors.lastName && errors.lastName.type === "minLength" && (
        <p>Last name must be at least 2 characters</p>
      )}
      {errors.lastName && errors.lastName.type === "pattern" && (
        <p>Last name must be letters only</p>
      )}

      <label>Nickname:</label>
      <input name="nickname" ref={register({ required: false })} />

      {errors.nickname && errors.nickname.type === "minLength" && (
        <p>Last name must be at least 2 characters</p>
      )}

      <label>Bio:</label>
      <input
        name="bio"
        ref={register({
          required: false,
          maxLength: 1000,
        })}
      />

      <input type="submit" />
    </form>
  );
}
