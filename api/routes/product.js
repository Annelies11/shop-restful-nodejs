const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : "Handling GET request to /product"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message : "Handling POST request to /product"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'aris'){
        res.status(200).json({
            message: 'Hello bro',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated Product"
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted Product"
    })
})

module.exports = router;