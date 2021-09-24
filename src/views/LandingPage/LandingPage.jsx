import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import ProductHero from 'views/LandingPage/ProductHero'
import ProductHowItWorks from 'views/LandingPage/ProductHowItWorks'

import { UserContext } from '../../context/UserContext'

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
