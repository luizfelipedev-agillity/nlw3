import {Router} from 'express';
import {getRepository} from 'typeorm';
import Orphanage from './models/Orphanage';
import multer from 'multer';
import uploadconfig from './config/upload';
import OrphanagesCOntroller from './controllers/orphanagesController'

const routes = Router();
const upload = multer(uploadconfig);

//MVC

//MODAL

//VIEWS

//CONTROLLERS

// A rota serve para direcionar qual sera o controller a ser usado na paginação do site, por exemplo
//o que será listado no formulário dentre outros.

//exibe a listagem de orfanatos.
routes.get('/orphanages', OrphanagesCOntroller.index);
//exibe um unico registro.
routes.get('/orphanages/:id', OrphanagesCOntroller.show);
//rota de criação de orfanatos vinculada ao item ./src.controller.
routes.post('/orphanages', upload.array('images'), OrphanagesCOntroller.create);

export default routes;
