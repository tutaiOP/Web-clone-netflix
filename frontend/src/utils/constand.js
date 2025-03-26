export const SMALL_URL_TMDB = "https://image.tmdb.org/t/p/w500"
export const ORIGINAL_IMG_TMDB = "https://image.tmdb.org/t/p/original"

export const formatDateVN = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};