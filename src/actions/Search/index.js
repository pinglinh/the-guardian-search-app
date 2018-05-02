import { API_KEY } from "../../../config";

export const SEARCH_INPUT_VALUE = "SEARCH_INPUT_VALUE";
export const SET_ARTICLES = "SET_ARTICLES";

export function inputValue(text) {
  return {
    type: SEARCH_INPUT_VALUE,
    text
  };
}

export function receivedArticles(articles) {
  return {
    type: SET_ARTICLES,
    articles
  };
}

function getArticles(query) {
  return function(dispatch) {
    return fetch(
      `http://content.guardianapis.com/search?q=${query}&api-key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        console.log("do we have data?", data);
        dispatch(receivedArticles(data.response.results));
      });
  };
}

// var counterFactory = function() {
//   var i = 0;
//   return function() {
//     return i++;
//   };
// };
//
// var counter = counterFactory();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
//
// const fetchPostsIfNeeded = function(subreddit) {
//   return function(dispatch, getState) {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit));
//     }
//   };
// };
//
// dispatch(fetchPostsIfNeeded(selectedSubreddit))

export default getArticles;
