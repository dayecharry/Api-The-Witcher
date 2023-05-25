const Character = require("../models/characters.models");

const allCharacters = async (req, res) => {
  try {
    const allCharacters = await Character.find();
    return res.status(201).json(allCharacters);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCharacterById = async (req, res) => {
  try {
    const {id} = req.params;
    const character = await Character.findById(id)
    return res.status(201).json(character);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const setNewCharacter = async (req, res)=> {
  try {
    const newCharacter = new Character(req.body);
    const createdCharacter = await newCharacter.save();
    return res.status(200).json(createdCharacter)
  } catch (error) {
    return res.status(500).json(error);
  }
}


const updateCharacter = async (req,res)=> {
  try {
    const {id} = req.params
    const putCharacter = new Character(req.body);
    putCharacter._id = id;

    const updateCharacter = await Character.findByIdAndUpdate(id, putCharacter, {new: true,
    });
    return res.status(200).json(updateCharacter)
  } catch (error) {
    return res.status(500).json(error);  
  }
}


const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacter = await Character.findByIdAndDelete(id);
    if (!deleteCharacter) {
      return res.status(404).json({ message: "character not found" });
    }
    return res.status(200).json(deleteCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { allCharacters, getCharacterById, setNewCharacter, updateCharacter, deleteCharacter};