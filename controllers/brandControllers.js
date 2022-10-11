//required
const { getBrandDb, updateBrandDb } = require("../utility/read_&_write");
const getSlug = require("../utility/getSlug");
const getRandomID = require("../utility/getRandomID");
// make controller

/**
 * @desc get all  brand
 * @name GET api/v1/brand
 * @access public
 */

const getAllBrand = (req, res) => {
  // all brand

  const brand = getBrandDb();

  //send data

  res.status(200).json(brand);
};

/**
 * @desc create a new brand
 * @name POST api/v1/brand
 * @access public
 */

const createBrand = (req, res) => {
  // all brand

  const brand = getBrandDb();

  // brand data add

  brand.push({
    id: getRandomID(),
    ...req.body,
    slug: getSlug(req.body.name),
  });

  //validation

  if (!req.params) {
    res.status(400).json({
      status: false,
      message: "Invalid Brand Data",
    });
  } else {
    // update data

    updateBrandDb(brand);

    // responsive

    res.status(201).json({
      status: true,
      message: "Create Brand Successful",
    });
  }
};

/**
 * @desc  Update brand
 * @name PUT api/v1/brand/:slug
 * @access public
 */

const brandUpdate = (req, res) => {
  // all brand

  const brand = getBrandDb();

  // get id

  const { id } = req.params;

  // get data

  const data = brand.findIndex((data) => data.id == id);

  // validation

  if (brand.some((data) => data.id == id)) {
    // update customer data

    brand[data] = {
      ...brand[data],
      ...req.body,
      slug: getSlug(req.body.name),
    };

    //update data

    updateBrandDb(brand);

    // responsive

    res.status(201).json({
      status: true,
      message: "Brand Update Successful",
    });
  } else {
    res.status(404).json({
      status: false,
      message: "Brand Not Found",
    });
  }
};

/**
 * @desc  delete brand
 * @name DELETE api/v1/brand/:slug
 * @access public
 */

const brandRemove = (req, res) => {
  // all brand

  const brand = getBrandDb();

  // get id

  const { id } = req.params;

  // get index

  const data = brand.filter((data) => data.id != id);

  // validation

  if (brand.some((data) => data.id == id)) {
    // update data

    updateBrandDb(data);

    // responsive

    res.status(200).json({
      status: true,
      message: " Brand Delete Successful",
    });
  } else {
    res.status(404).json({
      status: false,
      message: "Brand Not Found",
    });
  }
};

// exports controllers

module.exports = {
  getAllBrand,
  createBrand,
  brandUpdate,
  brandRemove,
};
