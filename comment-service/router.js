const router = require("express").Router();
const Comments = require("./commentModel");

router.post("/", async (req, res) => {
  const { postID, text } = req.body;
  const comment = new Comments({
    postID,
    text,
  });
  await comment.save();
  res.json({ message: "comment posted" });
});

router.get("/:postID", async (req, res) => {
  const { postID } = req.params;
  const comments = await Comments.find({ postID: postID });
  res.json({ comments });
});

module.exports = router;
