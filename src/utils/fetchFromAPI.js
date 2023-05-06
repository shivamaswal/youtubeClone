import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; 

const options = { 
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '3e4d338ee0mshf0d0a958e5c0e09p199ecejsn8fa54cd47029',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



  export const fetchFromAPI = async(url) => {
    const {data} =  await axios.get(`${BASE_URL}/${url}` , options); 

    return data;
  };

   