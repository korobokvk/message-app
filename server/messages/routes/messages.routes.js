const express = require('express');
const router = express.Router();
const Messages = require('../Schema/messages.schema');
const routesDataHandler = require('../middlewares/routes-middleware');

const lengthTitleError = {
  message: {
    message: 'Maximum title length is 15 simbols',
    status: 422
  }
}
router.get('/messages', (req, res, next) => {
  Messages.find({}, 'title message', (err, data) => {
    routesDataHandler(err, res, data, 200)
  });
});

router.post('/messages', (req, res, next) => {
  if (req.body.title) {
    if(req.body.title.length >= 15) {
      routesDataHandler(lengthTitleError, res, null, null, 422)
    } else {
      const messages = new Messages({
        title: req.body.title,
        message: req.body.message
      });
      messages.save((err, data) => {
        routesDataHandler(err, res, data, 200, 422)
      });
    }
  }
});

router.put('/messages/:id', (req, res, next) => {
  Messages.findById({_id: req.params.id}, 'title message', (err, data) => {
    if (err) {
      res.send(err.message).status(err.status);
    } else {
      if (req.body.title && !req.body.title.length >= 15) {
        data.title = req.body.title;
        if (req.body.message) {
          data.message = req.body.message;
        }
        data.save(routesDataHandler(err, res, data, 200));
      } else {
        routesDataHandler(lengthTitleError, res, null, null, 422)
      }
    }
  });
})

router.delete('/messages/:id', (req, res, next) => {
  Messages.deleteOne({_id: req.params.id}, (err, data) => {
    routesDataHandler(err, res, 'Message deleted successfully', 200)
  });
});

module.exports = router;
