import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();


export const getDataGenresTmdb = async (url) => {
    const options = {

        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.API_key
        }
    };
    const respond = await axios.get(url, options);
    if (respond.status !== 200) {
        throw new Error("Get API TMDB fail");
    }
    return respond.data;
}

