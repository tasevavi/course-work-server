const { model, Schema, Types: { ObjectId } } = require('mongoose');

const foundItemschema = new Schema({
    itemTitle: { type: String, required: [true, 'Item title is required'] },
    category: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: [true, 'Location is required'] },
    //itemImage: { data: Buffer, contentType: String }, additional library required //rename in the service and controller
    owner: { type: ObjectId, ref: 'User' }, 
    claimed: { type: Boolean, default: false }, 
    claimedBy: { type: [ObjectId], ref: 'User', default: [] }, 
    createdAt: { type: Date, default: new Date() }
});

const FoundItem = model('FoundItem', foundItemschema);

module.exports = FoundItem;