import React, { } from 'react'
import Header from '../components/Header'
import MovieSlider from '../components/MovieSlider'


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

    </div>
  )
}

export default HomePage
