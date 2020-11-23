const express = require("express");
const Classroom = require("../models/classroom");
const auth = require("../middleware/auth");
const multer = require("multer");
const router = new express.Router();

// create a new classroom
router.post("/classes", auth, async (req, res) => {
  const newClass = new Classroom({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await newClass.save();
    return res.status(201).send(newClass);
  } catch (e) {
    res.status(400).send(e);
  }
});

// upload a file

const upload = multer({
  dest: "uploads/classFiles/",
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
router.post(
  "/classes/me/file/:id",
  upload.single("file"),
  (req, res) => {
    res.send("uploaded!");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  },
);

// only for dev
// get a list of all classrooms
router.get("/classes", async (req, res) => {
  try {
    const classes = await Classroom.find({});

    return res.status(200).send(classes);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a list of all user classrooms
router.get("/classes/me", auth, async (req, res) => {
  try {
    const user = req.user;
    // for filtering
    const match = {};
    const sort = {};
    // GET /classes/me?active=true
    if (req.query.active) {
      match.active = req.query.active === "true";
    }
    // GET /classes/me?limit=10&skip=2&sortBy=createdAt:desc
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(":");
      sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
    }
    const options = {
      limit: parseInt(req.query.limit),
      skip: parseInt(req.query.skip),
      sort: sort,
    };

    await user
      .populate({
        path: "classrooms",
        match: match,
        options: options,
      })
      .execPopulate();
    return res.status(200).send(user.classrooms);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a classroom by id
router.get("/classes/me/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const classroom = await Classroom.findOne({ _id, owner: req.user._id });
    if (!classroom) {
      return res.status(404).send();
    }

    res.send(classroom);
  } catch (e) {
    res.status(500).send();
  }
});

// update a classroom by id
router.patch("/classes/me/:id", auth, async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "subject"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update),
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const classroom = await Classroom.findOne({ _id, owner: req.user._id });

    updates.forEach((update) => (classroom[update] = req.body[update]));
    await classroom.save();

    if (!classroom) {
      return res.status(404).send();
    }

    res.send(classroom);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete a classroom by id
router.delete("/classes/me/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const classroom = await Classroom.findOneAndRemove({
      _id,
      owner: req.user._id,
    });

    if (!classroom) {
      res.status(404).send();
    }

    res.send(classroom);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
