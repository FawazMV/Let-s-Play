import multer from "multer";
import * as dotenv from "dotenv";
dotenv.config();
import AWS from 'aws-sdk';
import multerS3 from "multer-s3";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: function (req, file, cb) {
        cb(null, 'Turf_Photos/' + Date.now().toString() + file.originalname);
    },
});

const upload = multer({ storage });

export default upload;
 