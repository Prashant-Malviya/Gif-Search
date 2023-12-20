import axios from "axios";
import React, { useEffect, useState } from "react";
// import Spinner from "./Spinner";

function useGifSearch(tag) {

    const [gif, setGif] = useState("");
    const [title,setTitle] = useState("");
    const [username,setUsername] = useState("");
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
let randomGifUrl , gifTitle, gifUsername;

async function fetchData(){
  setLoading(true);
const response = await axios.get(endpoint, { params: queryParams })
console.log(response)
randomGifUrl = response.data.data.images.downsized_large.url;
gifTitle = response.data.data.title;
gifUsername = response.data.data.username;

// console.log("printing title : "+gifTitle + " and Username is -> "+ gifUsername)

setGif(randomGifUrl);
setTitle(gifTitle);
setUsername(gifUsername);
setLoading(false);
}
useEffect(() => {
  fetchData();
}, []);

  
  return {
    gif,title,username,loading,fetchData
  };
}

export default useGifSearch
