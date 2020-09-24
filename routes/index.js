const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    if (!req.session.lists) {
      req.session.lists = [];
    }
    const taskLists = req.session.lists;
    req.session.cookie.maxAge += 1800000;

    res.render('pages/index', { pageTitle: 'To-Do', taskLists });
  });

  router.post('/createTask', (req, res) => {
    if (!req.session.lists) {
      req.session.lists = [];
    }
    let task = req.body;
    task.done = false;
    req.session.lists.push(task);

    return res.redirect('/');
  });

  router.put('/taskDone', (req, res) => {
    if (req.session.lists[req.query.id].done) {
      req.session.lists[req.query.id].done = false;
    } else {
      req.session.lists[req.query.id].done = true;
    }

    res.status(200).send('updated');
  });

  router.delete('/deleteTask', (req, res) => {
    let task = req.query.id;

    req.session.lists.splice(task, 1);

    res.status(200).send('deleted');
  });

  return router;
};
