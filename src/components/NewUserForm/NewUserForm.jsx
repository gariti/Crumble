import React from "react";
import ReactDOM from "react-dom";
import { useForm }  from 'react-hook-form';
import firebase from '../../database/Firebase'
import { useHistory } from 'react-router-dom';

export default function NewUserForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()

  const onSubmit = (values) => {

    var db = firebase.firestore();

    const userRef = db.collection("users")
    .add({values})
    .then(function(docRef) {
      console.log("Document created with ID: ", docRef.id);
      history.push(`/additionalinfo/${docRef.id}`);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }

  return (
    <form className="New User Form" onSubmit={handleSubmit(onSubmit)}>
      <h1>New User Sign Up!</h1>

      <label>First Name:</label>
      <input name="firstName" ref={register({ 
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

      <input type="submit"/>
    </form>
  );
}