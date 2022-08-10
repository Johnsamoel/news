const validator =  require("../utils/PostValidators");
module.exports = (req,res,next) => {
    let valid = validator(req.body);
    if(valid) {
        req.valid = true;
        next();
    } else {
        res.status(403).send("Forbidden Command");
    }
}