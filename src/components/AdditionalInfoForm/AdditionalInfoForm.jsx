import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Thumb from "./Thumb";
// import { withRouter } from "react-router";
// import ReactDOM from "react-dom";
import { useForm }  from 'react-hook-form';
import firebase from '../../database/Firebase'
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

export default function AdditionalInfoForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const match = useRouteMatch()

  const updateUser = (values) => {
    var db = firebase.firestore();
    const userRef = db.collection("users").doc(match.params.id);

    const res = userRef.update({...values})
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });

    console.log("Document updated: ", userRef.id);
    history.push(`/home/${userRef.id}`);
  }

  return (
    <form className="Additional Information Form" onSubmit={handleSubmit(updateUser)}>

       <h1>Join Your Community!</h1>
       <h3>
         Please provide a little bit more about yourself so others can get to
         know you. (this is optional)
       </h3>
       <Link to={`/home/`}>Skip</Link>


      <label>Bio:</label>
      <input name="bio" ref={register({ 
          required: false,
          maxLength: 1000,
        })}
      />
    
      <input type="submit"/>
    </form>
  );
}