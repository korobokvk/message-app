const config = require('../../../config.json');
const express = require('express');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Q = require('q');
const Users = require('../../Schema/users.schema');

function authenticate(username, password) {
    const deferred = Q.defer();
    if (!username || !password) {
        deferred.reject(`Username and password is required`);
    }
    Users.findOne({username: username}, (err, user) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        if(user && bcrypt.compareSync(password, user.hash)) {
            deferred.resolve({
                _id: user._id,
                username: user.username,
                token: jwt.sign({sub: user._id}, config.secret)
            });
        } else {
            deferred.resolve();
        };
    });

    return deferred.promise;
};

function getAllUser() {
    const deferred = Q.defer();

    Users.find({}, (err, users) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        users = _.map(users, (user) => {
            return _.omit(user, 'hash');
        });
        deferred.resolve(users);
    });
    return deferred.promise;
};

function getCurrentUser(_id) {
    const deferred = Q.defer();

    Users.findOne({_id: _id}, (err, user) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);
        
        if (user) {
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            deffer.resolve();
        };
    });

    return deferred.promise;
};

function create(userParams) {
    const deferred = Q.defer();

    Users.findOne({username: userParams.username}, (err, user) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        if (user) {
            deferred.reject(`User with name ${userParams.username} already exist`)
        } else {
            createUser();
        }
    });
    function createUser() {
        const user = new Users(
            _.omit(userParams, 'password')
        );

        user.hash = bcrypt.hashSync(userParams.password, 10);

        user.save((err, data) => {
            if (err) deferred.reject(`${err.name}: ${err.message}`);

            deferred.resolve();
        })
    }
    return deferred.promise;
};

function update(_id,  userParams) {
    const deferred = Q.defer();

    Users.findOne({_id: _id}, (err, user) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);

        if (user.username !== userParams.username) {
            Users.findOne({username: userParams.username}, (err, user) => {
                if (err) deferred.reject(`${err.name}: ${err.message}`);
                
                if (user) {
                    deferred.reject(`User with name ${userParams.username} already exist`);
                } else {
                    updateUser();
                };
            })
        } else {
            updateUser();
        }
    });

    function updateUser() {
        const user = {
            username: userParams.username
        };

        if(userParams.password) {
            user.hash = bcrypt.hashSync(userParams.password, 10);
        };

        Users.where({_id: _id}).update({$set: user}, (err, data) => {
            if (err) deferred.reject(`${err.name}: ${err.message}`);

            deferred.resolve();
        });

    };
    return deferred.promise;

};

function remove(_id) {
    const deferred = Q.defer();

    Users.deleteOne({_id: _id}, (err) => {
        if (err) deferred.reject(`${err.name}: ${err.message}`);
        
        deferred.resolve();
    });

    return deferred.promise;
}
services = {
    authenticate,
    getAllUser,
    getCurrentUser,
    create,
    update,
    remove
}
module.exports = services;