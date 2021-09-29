import ProductHero from 'Views/LandingPage/ProductHero'
import ProductHowItWorks from 'Views/LandingPage/ProductHowItWorks'
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { UserContext } from '../../Context/UserContext'

function LandingPage() {
  const { user } = useContext(UserContext)

  return user ? (
    <Redirect to="/" />
  ) : (
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

export default LandingPage
