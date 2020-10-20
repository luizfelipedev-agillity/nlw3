 
 // Inporta o express para a aplicação
import 'dotenv/config';

import express from 'express';
import 'express-async-errors'
import routes from './routes';
import path from 'path';
import errorhandler from './errors/handler';
import cors from 'cors';
//---import {getRepository} from 'typeorm';
//---import Orphanage from './models/Orphanage';
import './database/connection';
//cria uma aplicação, OBS apenas uma aplicação
 const app = express();
 app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/upload', express.static(path.join(__dirname,'..','upload')));
app.use(errorhandler);
//REQ e RES

//o express ajuda a lidar com as requisições e respostas do sistema de forma mais simples
//


//ROTAS = conjunto
//RECURSO = pagina de usuários que está sendo chamada com os usuários listados


//--------METODOS HTTP = GET, POST, PUT , DELETE , ETC...-------//

//---------------------------Métodos----------------------------//
//GET= Busca uma determinada informação (lista, item)
//POST =  Criando uma informação nova
//PUT =  Editar uma informação
//DELETE = Deleta uma informação
//--------------------------------------------------------------//

//--------------------Parametros Principais---------------------//
//QUERY PARAMS: http://localhost:3333/users?SEARCH=Felipe&Vacilão (trás uma busca executando na mesma rota)
//ROUTE PARAMS: http://localhost:3333/user/1 (Identificar um recurso)
//BODY: http://localhost:3333/user/ (Corpo da requisição)

//--------------------------------------------------------------//

//conjunto
//---app.post('/orphanages', async (request, response)=>{
//console.log(request.query); //query
//console.log(request.params); // Route  
//console.log(request.body); // Retorna o corpo da API 

//---console.log(request.body);
//variáveis para armazenar os dados do body
//---const{
//---    name,
//---     latitude,
//---     longitude,
//---     about,
//---     instructions,
//---     opening_hours,
//---     open_on_weekends
//---  }=request.body;

//pega os metodos da class
//---const orphanagesRepository = getRepository(Orphanage);
//cria o registro na tabela
//---const orphanage = orphanagesRepository.create({   
//---    name,
//---    latitude,
//---    longitude,
//---    about,
//---    instructions,
//---    opening_hours,
//---    open_on_weekends
//---});

//---await orphanagesRepository.save(orphanage);

//---return response.status(201).json({orphanage});
//--- });

 //ouve a porta 3333
 app.listen(process.env.PORT || 3333);
 


