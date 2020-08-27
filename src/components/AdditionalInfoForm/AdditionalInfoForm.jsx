import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Thumb from "./Thumb";
// import { withRouter } from "react-router";
import ReactDOM from "react-dom";
import { useForm }  from 'react-hook-form';
import firebase from '../../database/Firebase'
import { useHistory } from 'react-router-dom';

export default function AdditionalInfoForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()

  const updateUser = (id ,values) => {
    var db = firebase.firestore();
    const userRef = db.collection("users").doc(id);

    const res = userRef.update({...values})
    .then(function(docRef) {
      console.log("Document updated: ", docRef.id);
      history.push(`/home/${docRef.id}`);
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });
  }

  return (
    <form className="Additional Information Form" onSubmit={handleSubmit(updateUser)}>

       <h1>Join Your Community!</h1>
       <h3>
         Please provide a little bit more about yourself so others can get to
         know you. (this is optional)
       </h3>

      <label>Bio:</label>
      <input name="bio" ref={register({ 
          required: false,
          maxLength: 1000,
        })}
      />

      {errors.firstName && errors.firstName.type === "pattern" && (
        <p>First name must be letters only</p>
      )}

      <label>Last Name:</label>
      <input name="lastName" ref={register({ 
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

      <input type="submit"/>
    </form>
  );
}