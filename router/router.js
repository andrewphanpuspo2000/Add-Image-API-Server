import express from "express";
import { addItem, addComment, getAllItem } from "../DB/taskModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allItem = await getAllItem();
  console.log(allItem);
  res.json({
    status: "success",
    list: allItem,
  });
});
router.post("/", async (req, res) => {
  const pushData = await addItem(req.body);
  console.log(pushData);
  pushData?._id
    ? res.json({
        status: "success",
        informations: "information has been added",
      })
    : res.json({
        status: "fail",
        informations: "data is not stored",
      });
});
router.delete("/", (req, res) => {
  res.json({
    status: "success",
    informations: "information has been deleted",
  });
});

router.patch("/", async (req, res) => {
  try {
    const result = await addComment(req.body);
    console.log(result);
    res.json({
      status: "success",
      informations: "information has been updated",
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
