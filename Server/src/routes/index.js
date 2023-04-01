const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs");

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json(favs);
});

router.post("/rickandmorty/fav", (req, res) => {
  favs.push(req.body);
  res.status(200).json({ status: "ok" });
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id != id);
  res.status(200).json({ status: "ok" });
});

module.exports = router;
