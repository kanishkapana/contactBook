'use strict';

const express = require('express');
const router = express.Router();

const {ContactService} = require('../services');

  /**
  * @api {get} /contacts/ get all contacts
  * return json with all contact
  */
router.get('/', async (req, res, next) => {
  try {
    const list = await new ContactService().getContacts();
    return res.json(list);
  } catch(ex) {
    return res.json(ex);
  }
});


  /**
  * @api {post} /contacts/ create contact
  * return created concat json
  */
router.post('/', async (req, res, next) => {
  try {
    const result = await new ContactService().createContact(req.body);
    return res.json(result);
  } catch(ex) {
    return res.json(ex);
  }

});

module.exports = router;
