import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Intro from "../components/Intro"
import "../components/landing.css"
import Pricing from "../components/Pricing"
import Users from "../components/Users"

const Landing = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Users />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Landing
