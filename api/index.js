var express = require('express');
var bodyParser = require('body-parser');
var fakeContacts = require('./data/fakeContacts');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

// need to be moved to a controller later
// and maybe use mongoose schema model for the response coming from the server

function getContacts(req, res) {
  return res.json(fakeContacts);
}
function addContact(req, res) {

  console.log('req',req);

  console.log('body',req.body);
  //fs.writeFileSync('./data/fakeContacts', obj.join(',') , 'utf-8');
  return res.json(200);
}

app.get('/api/contacts', getContacts);

app.post('/api/contacts', addContact);


app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:' + app.get('port') + '/');
});