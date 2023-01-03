const express = require("express");

const router = express.Router();
// const Hotel = require("../models/hotel");
const {
  createHotels,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotel,
  byType,
  ByCity,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

// Create Hotels
router.post("/", verifyAdmin, createHotels);

// Update Hotels
router.put("/:id", verifyAdmin, updateHotel);

// Delete Hotels
router.delete("/:id", verifyAdmin, deleteHotel);

// Get One Hotels
router.get("/:id", getOneHotel);

// Get Hotels By city
router.get("/bycity", ByCity);

// Get All Hotels
router.get("/", getAllHotel);
router.get("/bytype", byType);

module.exports = router;
