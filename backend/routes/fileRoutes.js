const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

router.get('/', fileController.getFiles);
router.post('/', fileController.uploadFile, (req, res) => {
    res.send(req.file);
});
router.delete('/:filename', fileController.deleteFile);

module.exports = router;
