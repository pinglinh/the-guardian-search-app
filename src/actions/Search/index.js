import { API_KEY } from "../../../config";

export const GET_ARTICLES = "GET_ARTICLES";

function performSearch(event) {
  fetch(`http://content.guardianapis.com/search?q=${event}&api-key=${API_KEY}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: GET_ARTICLES,
        articles: data.response.results
      })
    );
}

export default performSearch;
