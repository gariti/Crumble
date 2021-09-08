import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, withRouter, useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

function LoginForm() {
  const { register, handleSubmit, errors, setError } = useForm({
    mode: 'onBlur',
  });
  const history = useHistory();
  const { authUser } = useContext(AuthContext);

  const onSubmit = async (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('log in success');
        history.push('/');
      })
      .catch((error) => {
        setError('firebase', {
          type: 'manual',
          message: error.message,
        });
        console.error('Failed to Log in: ', error.message);
      });
  };

  if (authUser) {
    return <Redirect to="/" />;
  }

  return (
    <form className="New User Form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Please log in:</h1>

      <label>Email:</label>
      <input
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })} />

      {errors.email && errors.email.type === 'required' && (
        <p>Email address is required to log in</p>
      )}

      {errors.email && errors.email.type === 'pattern' && (
        <p>Email is not in a correct format</p>
      )}

      <label>Password:</label>
      <input
        {...register('password', {
          required: true,
          minLength: 6,
        })}
        type="password" />

      {errors.password && errors.password.type === 'required' && (
        <p>Password is required</p>
      )}

      {errors.firebase && <p>{errors.firebase.message}</p>}
      <input type="submit" />
    </form>
  );
}

export default withRouter(LoginForm);
