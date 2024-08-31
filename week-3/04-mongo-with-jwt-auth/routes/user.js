const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Implement admin signup logic
  await User.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "User created successfully!!",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({ username, password });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Incorrect email and pass!!",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  await Course.find({}).then((value) => {
    res.json({
      courses: value,
    });
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
