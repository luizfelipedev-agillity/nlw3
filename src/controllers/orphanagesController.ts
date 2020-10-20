import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageview from '../views/orphanages_view';
import * as Yup from 'yup';

export default{
    //Visualiza a listagem de orfanatos
    async index(request: Request,response: Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find({
            relations:['images']
        });
        return response.json(orphanageview.rendermany(orphanages));

    },

    //visualiza um unico registro

    async show(request: Request,response: Response){
        const {id} = request.params;


        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {relations:['images']});
        return response.json(orphanageview.render(orphanage));
      
    },

    //cadastra o orfanato
   async create(request: Request,response: Response){
        
    console.log(request.body);
    console.log(request.files);
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
     }=request.body;

     const orphanagesRepository = getRepository(Orphanage);

     const requestImages = request.files as Express.Multer.File[];
     const images = requestImages.map(images=>{
         return {path:images.filename}
     })



     const data=({   
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends:open_on_weekends =='true',
        images

    })



    const schema = Yup.object().shape({
        name: Yup.string().required(), 
        latitude:Yup.number().required(),
        longitude:Yup.number().required(),
        about: Yup.string().required().max(300), 
        instructions:Yup.string().required(), 
        opening_hours:Yup.string().required(),
        open_on_weekends:Yup.boolean().required(),
        images:Yup.array(Yup.object().shape({
            path:Yup.string().required()
        }))
    });

    await schema.validate(data, {
        abortEarly:false, 
    })
    const orphanage = orphanagesRepository.create(data);
    
    await orphanagesRepository.save(orphanage);
    
    return response.status(201).json({orphanage});

   }
};