const Q = require('q');
const Messages = require('../../Schema/messages.schema');

function getAllMessages() {
    const deferred = Q.defer();

    Messages.find({}, (err, messages) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        deferred.resolve(messages);
    });
    return deferred.promise;
};

function getMessage(_id) {
    const deferred = Q.defer();

    Messages.findOne({_id: _id}, (err, message) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        if(message) {
            deferred.resolve(message);
        } else {
            deferred.resolve();
        };
    });
    return deferred.promise;
};

function create(messageParams) {
    const deferred = Q.defer();

    const message = new Messages({
        title: messageParams.title,
        message: messageParams.message,
        user: messageParams.user
    });

    message.save((err, message) => {
        console.log(message)
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        deferred.resolve(message);
    });


    return deferred.promise;
};

function update(_id, messageParams) {
    const deferred = Q.defer();

    if (messageParams.title && messageParams.title.length >= 15) {
        deferred.reject('Maximum title length is 15 simbols');
    } else {
        const message = {
            title: messageParams.title,
            message: messageParams.message,
            user: messageParams.user
        };
        Messages.findById({_id: _id}, (err, data) => {
            if (err) deferred.reject(`${err.name}: ${err.message}`);

            if(messageParams) {
                Object.assign(data, message);
                data.save((err, message) => {
                    if (err) deferred.reject(`${err.name}: ${err.message}`);
                    
                    deferred.resolve(message);
                });
            };
        });
    };

    return deferred.promise;
};

function remove(_id) {
    const deferred = Q.defer();

    Messages.deleteOne({_id: _id}, err => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        deferred.resolve();
    });

    return deferred.promise;
};

services = {
    getAllMessages,
    getMessage,
    create,
    update,
    remove
};

module.exports = services;