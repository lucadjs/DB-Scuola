const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

exports.uploadFile = upload.single('file');

exports.getFiles = (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan files');
        }
        res.send(files);
    });
};

exports.deleteFile = (req, res) => {
    const { filename } = req.params;
    fs.unlink(`./uploads/${filename}`, (err) => {
        if (err) {
            return res.status(500).send('File not found');
        }
        res.send({ message: 'File deleted' });
    });
};
