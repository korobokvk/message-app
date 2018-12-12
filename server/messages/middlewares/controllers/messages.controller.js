const messageService = require('../services/messages.service');

function getAllMessages(req, res) {
    messageService.getAllMessages()
        .then((message) => {
            res.send(message);
        })
        .catch(err => {
            res.status(400).send(err);
        })
};

function create(req, res) {
    messageService.create(req.body)
        .then((message) => {
            res.send(message);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

function update(req, res) {
    messageService.update(req.params._id, req.body)
        .then((messages) => {
            res.send(messages);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

function getMessage(req, res) {
    messageService.getMessage(req.params._id)
        .then((message) => {
            res.send(message);
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

function remove(req, res) {
    messageService.remove(req.params._id)
        .then(() => {
            res.json('success');
        })
        .catch(err => {
            res.status(400).send(err);
        })
};

const controls = {
    getAllMessages,
    getMessage,
    create,
    update,
    remove
};

module.exports = controls;