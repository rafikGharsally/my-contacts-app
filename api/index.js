var express = require('express');
var fakeContacts = require('./data/fakeContacts');
var app = express();
app.set('port', (process.env.PORT || 3001));

// need to be moved to a controller later
// and maybe use mongoose schema model for the response coming from the server

function getContacts(req, res) {
  return res.json(fakeContacts);
}
function addContact(req, res) {
  console.log('i am here');
  return res.json(200);
}

app.get('/api/contacts', getContacts);

app.post('/api/contacts', addContact);


app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:' + app.get('port') + '/');
});