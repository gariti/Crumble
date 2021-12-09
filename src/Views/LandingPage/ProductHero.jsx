import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import backgroundImage from 'Assets/svg/undraw_Walking_outside_re_56xo.svg'
import PropTypes from 'prop-types'
import React from 'react'

import ProductHeroLayout from './ProductHeroLayout'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
})

function ProductHero({ classes, setOpenLogin }) {
  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Souk is a place to find amazing food in your neighborhood at the lowest
        price possible. We do not take a slice of the profits from your orders,
        so you and your neighborhood businesses can save money.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={() => {
          setOpenLogin(true)
        }}
      >
        Let&apos;s eat!
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Support independant eateries!
      </Typography>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
  setOpenLogin: PropTypes.func.isRequired,
}

export default withStyles(styles)(ProductHero)
