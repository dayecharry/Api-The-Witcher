const express = require("express");
const { allCharacters, getCharacterById, setNewCharacter, updateCharacter, deleteCharacter} = require("../controllers/characters.controllers");

const router = express.Router();

router.get("/", allCharacters);
router.get("/:id", getCharacterById);
router.post("/", setNewCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;