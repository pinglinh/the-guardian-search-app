const fetchArticles = event => {
  return fetch(`http://localhost:3000/search?q=${event}`).then(response =>
    response.json()
  );
};

export default fetchArticles;
