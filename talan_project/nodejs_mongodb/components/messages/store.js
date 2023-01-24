const db = require('mongoose');
const Model = require('./model');

const url = "mongodb+srv://davidperez95:Chiqui123+@gettingstarted.wqqcfez.mongodb.net/?retryWrites=true&w=majority"

db.Promise = global.Promise;
db.connect(url, {
    useNewUrlParser: true,
});
console.log('[db] connection success');

function addMessage (message) {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages () {
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}