import React, { useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import ProductHero from 'views/LandingPage/ProductHero'
import ProductHowItWorks from 'views/LandingPage/ProductHowItWorks'

import { AuthContext } from '../../context/AuthContext'

function LandingPage() {
  const { authUser } = useContext(AuthContext)

  if (authUser) {
    return <Redirect to="/" />
  }

  return (
    <>
      {/* <AppAppBar /> */}
      <ProductHero />
      {/* <ProductValues /> */}
      {/* <ProductCategories /> */}
      <ProductHowItWorks />
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      {/* <AppFooter /> */}
    </>
  )
}

export default withRouter(LandingPage)
