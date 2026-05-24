// Local in-memory store for simulation
const users = [];

const chats = [
    { id: "1", sender: "Collins", receiver: "Lillian", message: "Hello! Are you ready for the mentor session?", timestamp: new Date() },
    { id: "2", sender: "Lillian", receiver: "Collins", message: "Yes, I am looking forward to it!", timestamp: new Date() }
];

const events = [
    { id: "1", title: "Hackathon Kickoff", date: "2026-06-01", description: "Opening ceremony and team formation." },
    { id: "2", title: "Mentorship Workshop", date: "2026-06-05", description: "Technical guidance session with mentors." }
];

module.exports = {
    users,
    chats,
    events
};