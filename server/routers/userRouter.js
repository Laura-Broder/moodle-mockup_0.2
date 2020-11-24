const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
// const { sendWelcomeMail, sendNotificationMail } = require("../emails/account");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = new express.Router();

// test the conection between the client and the server
router.get("", (req, res) => {
  try {
    return res.send("this is a get request from basePath localhost:5000");
  } catch (e) {
    res.status(400).send(e);
  }
});

// sign-up and create a new user
router.post("/users/sign-up", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();
    // sendWelcomeMail(newUser.email, newUser.name);
    await user.save();
    console.log("user sign up");
    return res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// configure uploaded images
const upload = multer({
  limits: {
    // limit to 1MB
    fileSize: 1000000,
  },
  fileFilter(req, file, callback) {
    const fileName = file.originalname.toLowerCase();
    if (!fileName.endsWith(".jpg" || ".png" || ".jpeg")) {
      return callback(new Error("file must be .jpg/.png/.jpeg format"));
    }
    return callback(undefined, true);

    // callback(undefined, false);
  },
});

// upload or update a profile pic
router.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    req.user.avatar = buffer;
    await req.user.save();
    res.send("uploaded!");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  },
);

// delete a profile pic
router.delete(
  "/users/me/avatar",
  auth,
  async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.send("image was deleted!");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  },
);

// get a profile picture by ID
router.get("/users/:id/avatar", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send();
  }
});

// sign in
router.post("/users/sign-in", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password,
    );
    const token = await user.generateAuthToken();

    return res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// only for dev
// get all users in DB
router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

// get a logged in user
router.get("/users/me", auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// log out this device
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("logged out");
  } catch (e) {
    res.status(500).send();
  }
});

// log out of all devices
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("logged out of all devices");
  } catch (e) {
    res.status(500).send();
  }
});

// delete user from db
router.delete("/user/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// deactivate the account
router.patch("/user/me", auth, async (req, res) => {
  try {
    req.user.active = false;
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// update user
router.patch("/user/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update),
  );

  if (!isValidUpdate) {
    return res.status(400).send({ error: "invalid update" });
  }
  try {
    const user = req.user;
    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
