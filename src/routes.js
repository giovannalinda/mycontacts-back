const { Router } = require('express');

const router = Router();

const ContactController = require('./app/controllers/ContactController');

router.get(
  '/contacts',
  (request, response, next) => {
    request.appId = 'MeuAppId';
    next();
  },
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
