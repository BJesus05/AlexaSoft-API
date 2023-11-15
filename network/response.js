exports.success = function(req, res, mensaje, status, body){
    res.status(status || 200).send({
        Mensaje:mensaje,
        body: body
    })
}
exports.error = function(req, res, message, status){
    res.status(status || 500).send({
        error:message,
        
    })
}