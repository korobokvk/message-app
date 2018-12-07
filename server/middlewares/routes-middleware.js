const routesDataHandler = (err, res, data, successStatus, errorStatus) => {
    if (err) {
        res.status(errorStatus || err.status).send(err.message);
    } else {
        res.status(successStatus).send({messages: data, status: 200});
    } 
    
};

module.exports = routesDataHandler;