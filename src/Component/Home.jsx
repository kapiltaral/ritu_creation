import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Card from './Card'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="section3">
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default Home