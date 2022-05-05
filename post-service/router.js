const router = require("express").Router();
const Posts = require("./postModel");

router.get("/", async (req, res) => {
  const posts = await Posts.find();
  res.json({ posts });
});

router.get("/:id", async (req, res) => {
  const postID = req.params.id;
  const post = await Posts.find({ _id: postID });
  res.json({ post });
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const post = new Posts({
    title,
    content,
  });
  await post.save();
  res.json({ message: "posted" });
});

module.exports = router;
