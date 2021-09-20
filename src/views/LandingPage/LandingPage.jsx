import React, { useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import ProductHero from 'views/LandingPage/ProductHero'
import ProductHowItWorks from 'views/LandingPage/ProductHowItWorks'

import { UserContext } from '../../context/UserContext'

function LandingPage() {
  const { user } = useContext(UserContext)

  if (user) {
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
