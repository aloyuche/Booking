const Hotel = require("../models/hotel.js");

module.exports.createHotels = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

module.exports.updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel is deleted");
  } catch (error) {
    next(error);
  }
};
module.exports.getOneHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
module.exports.getAllHotel = async (req, res, next) => {
  const { min, max, ...other } = req.query;
  try {
    const hotels = await Hotel.find({
      ...other,
      price: { $gt: min, $lt: max },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

module.exports.ByCity = async (req, res, next) => {
  const cities = req.query.cities.split("");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

module.exports.byType = async (req, res, next) => {
  const type = req.query.cities.split("");
  try {
    const allHotels = await Hotel.countDocuments({ type: "Hotel" });
    const allApartments = await Hotel.countDocuments({ type: "Apartments" });
    const allResorts = await Hotel.countDocuments({ type: "Resorts" });
    const allVillas = await Hotel.countDocuments({ type: "Villas" });
    const allCabins = await Hotel.countDocuments({ type: "Cabins" });

    res.status(200).json([
      { type: "Hotel", count: allHotels },
      { type: "Apartments", count: allApartments },
      { type: "Resorts", count: allResorts },
      { type: "Villas", count: allVillas },
      { type: "Cabins", count: allCabins },
    ]);
  } catch (error) {
    next(error);
  }
};
