import {getAllUsers} from "../Services/services.js";
import {getUser} from "../Services/services.js";
import {createUser} from "../Services/services.js";
import {deleteUser} from "../Services/services.js";
import {updateUser} from "../Services/services.js";

export async function getAllAnimals(req, res) {
    try{
    const client = await getAllUsers();
        res.status(200).json(client);}
    catch(err){
        res.status(500).json(err);
    }

}

export async function getAnimal(req, res) {
    try{
    const id = req.params.id;
    const client = await getUser(id);
        res.status(200).json(client);}
    catch(err){
        res.status(404).json(err);
    }
}
export async function createAnimal(req, res) {
    try{
    const client = await createUser(req.body);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

export async function deleteAnimal(req, res) {
    try{
    const id = req.params.id;
    const client = await deleteUser(id);
    res.status(200).json(client);}
    catch(err){
        res.status(500).json(err);
    }
}

export async function updateAnimal(req, res) {
    try{
    const val = req.body;
    const client = await updateUser(val);
    res.status(200).json(client);}
    catch(err){
        res.status(500).json(err);
    }
}