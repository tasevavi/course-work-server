const router = require('express').Router();
const api = require('../services/catalogService');
const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const mapErrors = require('../utils/errorMapper');



router.get('/', async (req, res) => {
    console.log('>>>FROM GET CATALOG',req.user);
    const data = await api.getAll();
    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        itemTitle: req.body.itemTitle,
        category: req.body.category,
        description: req.body.description,
        location: req.body.location,
        img: req.body.img,
        owner: req.user._id
    };

    try {
        const result = await api.create(item);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:id', preload(), (req, res) => {
    const item = res.locals.item;
    res.json(item);
});

router.put('/:id', preload(), isOwner(), async (req, res) => {
    const itemId = req.params.id;
    const item = {
        itemTitle: req.body.itemTitle,
        category: req.body.category,
        description: req.body.description,
        location: req.body.location,
        img: req.body.img,
        owner: req.user._id
    };

    try {
        const result = await api.update(itemId, item);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/:id', preload(), isOwner(), async (req, res) => {
    try {
        const itemId = req.params.id;
        await api.deleteById(itemId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;