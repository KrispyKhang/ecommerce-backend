const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../../models/index");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json({ message: "Tags not found" });
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagId) {
      res.status(404).json({ message: "Tag not found with this id" });
      return;
    }
    res.status(200).json(tagId);
  } catch (error) {
    res.status(500).json({ message: "Tag not found" });
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (error) {
    res.status(400).json({ message: "Tag not created" });
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updateTag) {
      res.status(404).json({ message: "Tag not found with this id" });
      return;
    }
    res.status(200).json(updateTag);
  } catch (error) {
    res.status(500).json({ message: "Tag not updated" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleteTag) {
      res.status(404).json({ message: "Tag not found with this id" });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (error) {
    res.status(500).json({ message: "Tag not deleted" });
  }
});

module.exports = router;
