const FoundItem = require('../models/FoundItem');

async function getAll() {
    return FoundItem.find({});
}

async function create(item) {
    const result = new FoundItem(item);
    await result.save();

    return result;
}

function getById(id) {
    return FoundItem.findById(id);
}

async function update(id, item) {
    const existing = await FoundItem.findById(id);

    existing.itemTitle = item.itemTitle;
    existing.category = item.category;
    existing.description = item.description;
    existing.location = item.location;
    existing.itemImage = item.itemImage;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    await FoundItem.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
};