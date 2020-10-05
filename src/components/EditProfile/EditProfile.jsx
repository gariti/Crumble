import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

export default function EditProfile() {
  // const { authUser } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const defaultFormValues = {
    firstName: "",
    lastName: "",
    nickname: "",
    address: "",
    bio: "",
  };

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: defaultFormValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (!user.loading) {
      setLoading(user.loading);
      reset(user.data);
    }
  }, [user]);

  const updateUser = async (values) => {
    const newUserData = { ...user.data, values };

    await user.docRef.update({ newUserData }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
    setUser({ ...user, data: newUserData });
    console.log("Document updated: ", user.docRef.id);
    history.push(`/profile`);
  };

  //TODO: Banner to send email verification
  // const resendEmailVerification = async () => {
  //   authUser.sendEmailVerification();
  // };

  return (
    !loading && (
      <form className="Edit your profile" onSubmit={handleSubmit(updateUser)}>
        <h1>Join Your Community!</h1>
        <h3>
          Please provide a little bit more about yourself so others can get to
          know you.
        </h3>

        {/* TODO: make banner for email verification */}

        {/* {!!!authUser && authUser.emailVerified === false && (
        <div>
          <h3>Email address is not verified</h3>
          <Button onClick={resendEmailVerification}>
            Send verification email
          </Button>
        </div>
      )} */}

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
      </form>
    )
  );
}
