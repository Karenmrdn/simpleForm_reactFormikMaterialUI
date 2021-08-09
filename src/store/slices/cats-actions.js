import axios from "axios";
import { catsActions } from "./cats-slice";

export const fetchCatPhotoUrl = () => async (dispatch) => {
  const fetchNewData = async () => {
    const response = await axios
      .get("https://api.thecatapi.com/v1/images/search")
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    const data = await response.data;

    const url = data[0].url;

    return url;
  };

  try {
    const data = await fetchNewData();
    dispatch(catsActions.setPhotoUrl(data));
  } catch (error) {
    console.error("You have gotten an error! ", error);
  }
};
