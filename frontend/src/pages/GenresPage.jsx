import React from 'react'
import Header from '../components/Header'
import GalleryHeader from '../components/GalleryHeader'
import MovieSlider from '../components/MovieSlider'
import Footer from '../components/Footer'

const GenresPage = () => {
    const category = [
        "top_rated",
        "now_playing",
        "popular",
        "upcoming",

    ]
    return (
        <div>
            <Header />
            <div className="sub-header absolute top-[60px] left-0 right-0 px-13">
                <GalleryHeader />
            </div>
            {
                category.map((item, index) => (
                    <MovieSlider item={item} key={index} />
                )
                )}
            <Footer />
        </div>

    )
}

export default GenresPage
