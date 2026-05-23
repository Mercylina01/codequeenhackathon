const Event = require("../models/Event");

const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
};

module.exports = { getEvents, createEvent };