const api = require('../middlewares/apiMiddleware');

const get =  async (req,res, next) => {
    var apiResponse = await api.getSearchResult(req.params.searchString);
    console.log(req.params.searchString);
    return res.send(apiResponse)
}


module.exports = {
    get
}