import { API_KEY } from "../../../config";

export const SEARCH_INPUT_VALUE = "SEARCH_INPUT_VALUE";
export const SET_ARTICLES = "SET_ARTICLES";

function getArticles(dispatch, query) {
  fetch(`http://content.guardianapis.com/search?q=${query}&api-key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log("do we have data?", data);
      dispatch({
        type: SET_ARTICLES,
        articles: data.response.results
      });
    });
}

export default {
  getArticles
};
