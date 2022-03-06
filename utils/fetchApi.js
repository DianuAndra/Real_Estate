import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

//for fetching the data from API
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "27573d8301msh514a2de1eca5918p1e5ec0jsnb3da2541370c",
    },
  });

  return data;
};
