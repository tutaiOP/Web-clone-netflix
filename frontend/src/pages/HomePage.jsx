import React, { } from 'react'
import Header from '../components/Header'
import MovieSlider from '../components/MovieSlider'
import Footer from '../components/Footer'
import BoxImage from '../components/BoxImage'



const HomePage = () => {
  const category = [
    "top_rated",
    "now_playing",
    "popular",
    "upcoming",

  ]
  return (
    <>
      <Header

      />
      <BoxImage />
      <div>


        {
          category.map((item, index) => (
            <MovieSlider item={item} key={index} />
          )
          )}
        <Footer />
      </div>
    </>
  )
}

export default HomePage
