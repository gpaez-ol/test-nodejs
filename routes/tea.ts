import express from "express"; //import express
import multer from "multer";
const upload = multer();
const router = express.Router();
const teaController = require("../controllers/tea");
router.get("/tea", teaController.getAllTea);
router.post("/tea", upload.none(), teaController.newTea);
module.exports = router;
