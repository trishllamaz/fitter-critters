const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Database setup
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
let db;

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    db = client.db(dbName);
    console.log("Connected successfully to database");
});

// Set up Multer
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function(req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/upload', upload.single('imageFile'), (req, res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname
    };
    
    db.collection('images').insertOne(fileData, (err, result) => {
        if (err) return res.status(500).send(err);
        res.redirect('/posts.html');
    });
});

// Serve files statically from 'public' folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
