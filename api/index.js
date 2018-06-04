var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jsonfile = require('jsonfile');
let file = path.join(__dirname, 'data/fakeContacts.json');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

// need to be moved to a controller later
// and maybe use mongoose schema model for the response coming from the server

function getContacts(req, res) {
  jsonfile.readFile(file, function(err, obj) {
     return res.json(obj);
  });
}

//need refactor later
function addContact(req, res) {

  let data = req.body;
  jsonfile.readFile(file, function(err, obj) {
    let len = obj.contacts.length;
    data.id = ++len;
    obj.contacts.push(data);

    jsonfile.writeFile(file, obj,
      function(success) {
        return res.json(obj);
      },
      function (err) {
        return res.json(500);
    });

  });

}

//my routes goes here
app.get('/api/contacts', getContacts);
app.post('/api/contacts', addContact);


app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:' + app.get('port') + '/');
});