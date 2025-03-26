import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { useContent } from '../store/useContent';
import { useNavigate } from 'react-router-dom';

const GalleryHeader = () => {
    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Mystery",
        "Romance",
        "Science Fiction",
        "TV Movie",
        "Thriller",
        "War",
        "Western",
    ];
    const navigated = useNavigate();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible); // Đổi trạng thái hiển thị
    };

    const { getGenreMovie } = useContent();

    const handleGenreClick = (genre) => {
        getGenreMovie(genre); // Gọi API để lấy danh sách phim theo thể loại
        navigated("/search");
        setIsDropdownVisible(false); // Đóng dropdown sau khi click
    };

    return (
        <div className="flex items-center">
            <h1 className="text-4xl text-white font-medium">Series</h1>
            <div
                className="relative flex ml-5 py-1 px-5 items-center text-left bg-black font-medium text-white border border-white cursor-pointer"
                onClick={toggleDropdown}
            >
                <p className="hover:opacity-80">Thể loại</p>
                <ChevronDown className="ml-2" />
                {isDropdownVisible && (
                    <div className="absolute flex flex-wrap top-[35px] left-0 min-w-[580px] bg-black p-4 z-10 border border-white">
                        {genres.map((genre, index) => (
                            <div
                                key={index}
                                className="w-1/3 text-white cursor-pointer hover:underline mb-2"
                                onClick={() => handleGenreClick(genre)}
                            >
                                {genre}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryHeader;