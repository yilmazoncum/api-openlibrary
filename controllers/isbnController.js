const api = require('../middlewares/apiMiddleware');

const get = async (req,res,next) => {
    var apiResponse = await api.getIsbn(req.params.id);
    return res.json(apiResponse)
}

module.exports = {
    get
}