const CONNECTION_STRING = 'mongodb://localhost:27017/lostAndFound';
const PORT = 3000;
const JWT_SECRET = 'lostFound93284c9rew';
const SALT_ROUNDS = 10;
const EMAIL_PATTERN = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/ //check for better way to validate email

module.exports = {
    CONNECTION_STRING, 
    PORT, 
    JWT_SECRET, 
    SALT_ROUNDS, 
    EMAIL_PATTERN
}