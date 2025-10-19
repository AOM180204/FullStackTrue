import { pool } from './db.js'
import {response} from "express";

async function TestConnection(){
    try{
        const response = await pool.query('SELECT * FROM "Atendimento"');
        if(response.rows.length > 0){

        console.log("Conectado: ", response.rows[0])
        }
        else{

        }
    }catch(err){
        console.log("Error getting connection", err)
    }
}

TestConnection()