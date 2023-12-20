import axios from "axios";
import React, { useEffect, useState } from "react";
// import Spinner from "./Spinner";

function useGifSearch(tag) {

    const [gif, setGif] = useState("");
    const [gif2,setGif2] = useState("");
    const [gif3,setGif3] = useState("");
    const [loading,setLoading] = useState(false);

  // const axios = require('axios');

// api key 
const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

// Giphy API endpoint for fetching a random GIF
const endpoint = 'https://api.giphy.com/v1/gifs/random';


// Parameters for the API request
const queryParams = {
  api_key: apiKey,
  tag: tag, // Replace with your desired tag or leave it empty for a completely random GIF
};

// Make the API request using axios
let randomGifUrl;

async function fetchData(){
  setLoading(true);
const response = await axios.get(endpoint, { params: queryParams })
console.log(response)
randomGifUrl = response.data.data.images.downsized_large.url;
setGif(randomGifUrl);


setLoading(false);
}
useEffect(() => {
  fetchData();
  setGif2(()=>fetchData.randomGifUrl)
}, [setGif,setGif2,setGif3]);

  
  return {
    gif,gif2,gif3,loading,fetchData
  };
}

export default useGifSearch
