import axios from "axios";
import React, { useEffect, useState } from "react";
// import Spinner from "./Spinner";

function useGifSearch(tag) {

    const [gif, setGif] = useState([]);
    const [loading,setLoading] = useState(true);
    // const [title,setTitle] = useState("");
    // const [username,setUsername] = useState("");

  // const axios = require('axios');

// api key 
// const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

// Giphy API endpoint for fetching a random GIF
// const endpoint = 'https://api.giphy.com/v1/gifs/random';


// Parameters for the API request
// const queryParams = {
//   api_key: apiKey,
//   tag: tag, // Replace with your desired tag or leave it empty for a completely random GIF
// };

// Make the API request using axios
let randomGifUrl , gifTitle, gifUsername;

function fetchData(){
  // setLoading(true);
// const response = await axios(endpoint, { params: queryParams })

axios(
  `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${tag}&limit=3&offset=0&rating=g&lang=en`
).then((res) => setGif(res.data.data))
.catch((error) => console.log("error in api",error))
.finally(() => setLoading(false));
console.log("fetcched data clicked")
// console.log(gif)

// randomGifUrl = response.data.data.images.downsized_large.url;
// gifTitle = response.data.data.title;
// gifUsername = response.data.data.username;

// console.log("printing title : "+gifTitle + " and Username is -> "+ gifUsername)

// setGif(randomGifUrl);
// setTitle(gifTitle);
// setUsername(gifUsername);
// setLoading(false);
}
// console.log(gif)
useEffect(() => {
  fetchData();
}, [tag]);
console.log(gif)
  
  return {
    gif,loading,fetchData
  };
}

export default useGifSearch
