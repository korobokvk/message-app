const express = require('express');
const router = express.Router();
const Messages = require('../Schema/schema');
const routesDataHandler = require('../middlewares/routes-middleware');

router.get('/messages', (req, res, next) => {
  Messages.find({}, 'title message', (err, data) => {
    routesDataHandler(err, res, data, 200)
  });
});

router.post('/messages', (req, res, next) => {
  const messages = new Messages({
    title: req.body.title,
    message: req.body.message
  });
  messages.save((err, data) => {
    routesDataHandler(err, res, data, 200, 422)
  });
});

router.put('/messages/:id', (req, res, next) => {
  Messages.findById({_id: req.params.id}, 'title message', (err, data) => {
    if (err) {
      res.send(err.message).status(err.status);
    } else {
      if (req.body.title) data.title = req.body.title;
      if (req.body.message) data.message = req.body.message;
    }
    data.save(routesDataHandler(err, res, data, 200));
  });
})

router.delete('/messages/:id', (req, res, next) => {
  Messages.remove({_id: req.params.id}, (err, data) => {
    routesDataHandler(err, res, 'Message deleted successfully', 200)
  });
});

module.exports = router;
