const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', function (req, res) {
    // console.log(req.headers);
    /* res.header({
        "custom-header": "Personalized value"
    }); */
    //response.send('Message list');
    /* if (req.query.error == 'ok') {
        response.error(req, res, 'Unexpected error', 500, 'Just a simulation of error');
    } else {
        response.success(req, res, 'message list');
    } */

    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })
});

router.post('/', function (req, res) {
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Invalid information', 400, 'controller error');
        });
});

module.exports = router;