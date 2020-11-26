const multer = require("multer");

// configure uploaded files
exports.fileUpload = multer({
  limits: {
    // limit to 1MB
    fileSize: 1000000,
  },
  fileFilter(req, file, callback) {
    const fileName = file.originalname.toLowerCase();
    if (!fileName.endsWith(".pdf" || ".doc" || ".docx")) {
      return callback(new Error("file must be .doc/.docx/.pdf format"));
    }
    return callback(undefined, true);

    // callback(undefined, false);
  },
});
