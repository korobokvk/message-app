const routesDataHandler = (err, res, data, successStatus, errorStatus) => {
    if (err) res.send(err.message).status(errorStatus || err.status);
    res.send({messages: data}).status(successStatus);
};

module.exports = routesDataHandler;