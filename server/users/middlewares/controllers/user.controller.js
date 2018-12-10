// const config = require('../../../consfig.json');
// const express = require('express');
const userService = require('../services/user.service');

function authenticate(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then((user) => {
            if(user) {
                res.send(wser);
            } else {
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};


function register(req, res) {
    userService.create(req.body)
        .then(() => {
            res.json('success');
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

function getAllUser(req, res) {
    userService.getAllUser()
        .then((user) => {
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

function getCurrentUser(req, res) {
    userService.getCurrentUser(req.user.sub)
        .then((user) => {
            if(user) {
                res.send(user);
            } else {
                res.sendStatus(404)
            };
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(() => {
            res.json('success');
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

function remove(req, res) {
    userService.remove(req.params._id)
    .then(() => {
        res.json('success');
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

const controls = {
    authenticate,
    register,
    update,
    remove,
    getAllUser,
    getCurrentUser
};

module.exports = controls;