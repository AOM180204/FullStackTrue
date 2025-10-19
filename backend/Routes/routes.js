import express from "express";
import { getAllAnimals} from "../Controllers/controllers.js";
import {getAnimal} from "../Controllers/controllers.js";
import {updateAnimal} from "../Controllers/controllers.js";
import {deleteAnimal} from "../Controllers/controllers.js";
import {createAnimal} from "../Controllers/controllers.js";

export const router = express.Router();

router.get('/', getAllAnimals);
router.get('/animais/:id', getAnimal);
router.put('/animais/put', updateAnimal);
router.post('/animais', createAnimal);
router.delete('/animais/delete/:id', deleteAnimal);