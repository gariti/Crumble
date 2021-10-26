import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import * as React from 'react'

SignUpStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}

const steps = ['Registration', 'Photo', 'About']

export default function SignUpStepper({ activeStep, handleNext, handleBack }) {
  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography>Please wait while we register your account...</Typography>
        </>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              // sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep === steps.length - 1 ? (
              <Button type="submit" onClick={handleNext}>
                Sign Up
              </Button>
            ) : (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  )
}
