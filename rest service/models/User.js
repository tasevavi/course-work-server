const { model, Schema, Types: {ObjectId} } = require('mongoose');
const { EMAIL_PATTERN } = require('../env');

const userSchema = new Schema({
    email: { 
        type: String, 
        validate: {
        validator(value) {
            return EMAIL_PATTERN.test(value);
        }, 
        message: 'Please enter a valid email address'
        }, 
        required: [true, 'Email is required']
    },
    hashedPassword: { type: String, required: true },
    claimedItems: { type: [ObjectId], ref: 'FoundItem', default: [] }, 
    postedItems: { type: [ObjectId], ref: 'FoundItem', default: [] }, 
    profilePicture: { type: String } //later decide if I want to keep it
});


userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 1
    }
});

const User = model('User', userSchema);

module.exports = User;