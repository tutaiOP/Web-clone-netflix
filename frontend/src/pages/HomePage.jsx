import React, { } from 'react'
import Header from '../components/Header'
import MovieSlider from '../components/MovieSlider'
import Footer from '../components/Footer'


const HomePage = () => {
  const category = [
    "top_rated",
    "now_playing",
    "popular",
    "upcoming",

  ]
  return (
    <div>
      <Header />
      {
        category.map((item, index) => (
          <MovieSlider item={item} key={index} />
        )
        )}
      <Footer />
    </div>
  )
}

export default HomePage
