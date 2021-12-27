import { Link } from '@material-ui/core'
import bio from 'Assets/img/art/bio.png'
import dinner from 'Assets/img/art/dinner.png'
import selfie from 'Assets/img/art/selfie.png'
import { createNewUser, uploadPhoto, updateUser } from 'Cloud/firestore'
import SignUpStepper from 'Components/Registration/SignUpStepper'
import { useSharedStyles } from 'Styles/Shared'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import AdditionalInfo from './AdditionalInfoInput'
import PhotoInput from './PhotoInput'
import RegistrationInput from './RegistrationInput'

function SignUp({ setForm, setLoading }) {
  const [activeStep, setActiveStep] = React.useState(0)
  const [photo, setPhoto] = useState(null)
  const classes = useSharedStyles()
  const history = useHistory()

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const handleNext = (event) => {
    if (activeStep < 2) {
      event.preventDefault()
    } else {
      submitUserRegistration()
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const submitUserRegistration = async () => {
    const data = {
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      email: getValues('email'),
      additionalInfo: getValues('additionalInfo'),
    }

    let uid
    setLoading(true)
    createNewUser(data.email, getValues('password'))
      .then((uc) => {
        uid = uc.user.uid
      })
      .then(() => uploadPhoto(`${uid}/profile`, photo))
      .then(() => updateUser(uid, data))
      .then(() => history.push('/'))
  }

  let [headerImage, headerImageAlt] = ['', '']
  switch (activeStep) {
    case 1:
      headerImage = selfie
      headerImageAlt = 'Girl taking selfie'
      break
    case 2:
      headerImage = bio
      headerImageAlt = 'Digital profile'
      break
    default:
      headerImage = dinner
      headerImageAlt = 'Couple eating hamburgers and drinking wine'
      break
  }

  return (
    <form className={classes.form}>
      <img
        className={classes.headerIcon}
        src={headerImage}
        alt={headerImageAlt}
      />

      {activeStep === 0 && (
        <RegistrationInput register={register} errors={errors} />
      )}

      {activeStep === 1 && (
        <PhotoInput
          register={register}
          classes={classes}
          errors={errors}
          photo={photo}
          setPhoto={setPhoto}
        />
      )}

      {activeStep === 2 && (
        <AdditionalInfo register={register} classes={classes} errors={errors} />
      )}

      {/* Submit */}
      <SignUpStepper
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
      />

      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setForm('login')
        }}
      >
        Already have an account? Sign in.
      </Link>
    </form>
  )
}

SignUp.propTypes = {
  setForm: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default SignUp
