const api = require('../middlewares/apiMiddleware');
const manipuleJsonMiddleware = require('../middlewares/manipuleJsonMiddleware');

const get = async (req,res,next) => {
    var apiResponse = await api.getIsbn(req.params.id);
    apiResponse = manipuleJsonMiddleware.manipuleJSON(apiResponse);
    return res.json(apiResponse)
}

module.exports = {
    get
}