import SoukAppBar from 'Components/SoukAppBar'
import LoginDialog from 'Views/LandingPage/LoginDialog'
import ProductHero from 'Views/LandingPage/ProductHero'
import ProductHowItWorks from 'Views/LandingPage/ProductHowItWorks'
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'

import { UserContext } from '../../Context/UserContext'

function LandingPage() {
  const { user } = useContext(UserContext)
  const [openLogin, setOpenLogin] = useState(false)

  return user ? (
    <Redirect to="/" />
  ) : (
    <>
      <SoukAppBar setOpenLogin={setOpenLogin} />
      <LoginDialog setOpenLogin={setOpenLogin} openLogin={openLogin} />
      <ProductHero setOpenLogin={setOpenLogin} />
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
