const express = require("express");

const router = express.Router();

// [goi NewController]

const myCourseController = require("../app/controllers/myCourseController");

router.get("/:id/edit", myCourseController.myCourseEdit);
router.put("/:id", myCourseController.myCourseUpdate);
router.patch("/:id/restore", myCourseController.restore);
router.delete("/:id", myCourseController.destroy);
router.delete("/:id/force", myCourseController.forceDestroy); // delete permanently
router.get("/store", myCourseController.myCourses);
router.get("/trash", myCourseController.trash);

module.exports = router;
