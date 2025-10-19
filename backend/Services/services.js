import {pool} from "../config/db.js";

export async function getAllUsers(){
    try{
    const result= await pool.query('SELECT * FROM "Animais"');
    return result.rows;}
    catch(err){
        console.log(err);
    }
}

export async function getUser(id){
    try{
    const clients=await pool.query('SELECT * FROM "Animais" where id= $1', [id])
    return clients.rows;}
    catch(err){
        console.log(err);
    }
}

export async function createUser(user){
    try{
    const SQL='INSERT INTO "Animais" (nome, idade, sexo, especie) values ($1, $2, $3, $4)';
    const values=[user.nome,user.idade,user.sexo,user.especie];
    await pool.query(SQL, values);}
    catch(err){
        console.error(err);
    }
}

export async function updateUser(user){
    try{
    const SQL='UPDATE "Animais" SET nome=$1, idade=$2, sexo=$3, especie=$4 WHERE id=$5'
    const values=[user.nome, user.idade, user.sexo, user.especie, user.id]
    await pool.query(SQL, values)}
    catch(err){
        console.error(err);
    }
}

export async function deleteUser(id){
    try{
    await pool.query('DELETE FROM "Animais" where id= $1', [id])}
    catch(err){
        console.error(err);
    }
}