const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');

app.use(bodyParser.json());

/* -------------------- IMAGE UPLOADER -------------------- */ 

const date = new Date.now();

const store = (req, file, cb) => {
    cb(null, 'uploads');
}

const fileName = (req, file, cb) => {
    cb(null, date + '-' + file.originalname)
}

const storage = multer.diskStorage({
    destination: store,
    filename: fileName
});

/**  
* CREATE New Item 
*
* @return response()
*/