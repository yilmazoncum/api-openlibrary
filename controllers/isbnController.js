const api = require('../middlewares/apiMiddleware');
const manipuleJsonMiddleware = require('../middlewares/manipuleJsonMiddleware');
const  dbMiddleware = require('../middlewares/dbMiddleware');
const { response } = require('express');

const get = async (req,res,next) => {
    
    var x = await dbMiddleware.isBookAvailable(req.params.id)

    if(x){
        console.log("Book already in Database");
        res.json(x)
    }else{

        var apiResponse = await api.getIsbn(req.params.id);
        apiResponse = manipuleJsonMiddleware.manipuleJSON(apiResponse);

        dbMiddleware.save(apiResponse)
        console.log("Book saved to Database");
        res.json(apiResponse);
    }  

    return res.send()
}

module.exports = {
    get
}