const {CustomAPIError} = require("../middleware/custom-error")

const errorHandlerMW = (err, req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json(err.message)
    }
    return res.status(500).json({msg:`Somethimg went wrong, please try again`})
}
module.exports = errorHandlerMW