var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jsonfile = require('jsonfile');
var _ = require('underscore');

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

function getSingleContact(req, res) {

  let id = req.params.id;
  jsonfile.readFile(file, function(err, obj) {
    let found = _.find(obj.contacts, function(num){ return parseInt(num.id, 10) === parseInt(id, 10); });
    return res.json(found);
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

//need refactor later
function editContact(req, res) {

  let id = req.params.id;
  let data = req.body;

  jsonfile.readFile(file, function(err, obj) {

    let index = _.findIndex(obj.contacts, function (el) {
        return parseInt(el.id, 10) === parseInt(id, 10)
      });
    obj.contacts.splice(index, 1, data);

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
app.get('/api/contacts/:id', getSingleContact);
app.put('/api/contacts/:id', editContact);


app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:' + app.get('port') + '/');
});