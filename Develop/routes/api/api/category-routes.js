const router = require("express").Router();
const { Category, Product } = require("../../../models/index");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryId) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.status(200).json(categoryId);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    //  Update a category by its `id` value
    const updateCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    //  if the category is not found, send a 404 error
    if (!updateCategory) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    // delete the category by its `id` value
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deleteCategory) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res
      .status(200)
      .json({ message: "Category deleted successfully!", deletedCategory });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
