const axios = require('axios').default

const  getIsbn = async (id) =>{
    var apiResponse
    await axios.get(`https://openlibrary.org/isbn/${id}.json`)
      .then(function (response) {
        apiResponse = response.data;
      })
      return apiResponse
}

const getSearchResult = async (query) =>{
  var apiResponse
    await axios.get(`https://openlibrary.org/search?q=${query}`)
      .then(function (response) {
        apiResponse = response.data;
      })
      return apiResponse
}

module.exports ={
    getIsbn,
    getSearchResult
}