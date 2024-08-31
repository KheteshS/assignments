const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "Admin created successfully!!",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.find({
    username,
    password,
  });

  console.log(admin, JWT_SECRET);

  if (admin) {
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

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    msg: "Course created successfully!!",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({}).then((value) => {
    res.json({
      courses: value,
    });
  });
});

module.exports = router;
