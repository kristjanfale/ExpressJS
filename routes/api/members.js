const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => {
  res.json(members);
});

// Get single member (req.params.id)
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  // Check if there is no 'name' or 'email'
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please enter name and email' });
  }

  // Add new member to array
  members.push(newMember);

  res.json(members);
});

module.exports = router;
