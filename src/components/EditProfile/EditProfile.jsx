import React, { useContext } from "react";
import { AuthContext } from "../../Firebase/Auth";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import firebase from "../../Firebase/Firebase";
import { useHistory, Redirect } from "react-router-dom";

export default function EditProfile() {
  const { register, handleSubmit, errors, setError } = useForm();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const updateUser = (values) => {
    var db = firebase.firestore();

    const userRef = db.collection("users").doc(currentUser.id);

    const res = userRef.update({ ...values }).catch(function (error) {
      console.error("Error updating document: ", error);
    });

    console.log("Document updated: ", userRef.id);
    history.push(`/profile`);
  };

  const resendEmailVerification = async () => {
    currentUser.sendEmailVerification();
  };

  if (!!!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <form className="Edit your profile" onSubmit={handleSubmit(updateUser)}>
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

      <label>Address:</label>
      <input name="address" ref={register({ required: false })} />

      {errors.address && errors.address.type === "minLength" && (
        <p>Address must be valid</p>
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

      {!!currentUser && (
        <div>
          <h3>Email address is not verified</h3>
          <Button onClick={resendEmailVerification}>
            Send verification email
          </Button>
        </div>
      )}
    </form>
  );
}
