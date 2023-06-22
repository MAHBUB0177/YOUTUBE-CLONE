import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    // q: 'music',
    //   part: 'snippet,id',
    //   regionCode: 'US',
      maxResults: '50',
      // order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '9632d9f1f4msh7ff6d011572fc98p1cfd63jsn1ea91c557a3f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// export const fetchFromAPI = async (item) => {
//   const url=`BASE_URL/${item}`
//   const { data } = await axios.get(url, options);
//   // const {data}=await axios.get(BASE_URL,options)

//   return data;
// };

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};