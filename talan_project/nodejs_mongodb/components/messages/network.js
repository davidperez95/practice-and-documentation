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
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
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

router.patch('/:id', function (req, res) {

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `User ${req.params.id} deleted`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        });
})

module.exports = router;