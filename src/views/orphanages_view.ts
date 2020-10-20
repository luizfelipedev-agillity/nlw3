import Orphanage from '../models/Orphanage';
import imagesview from './images_view';
export default{ 
    //retorna um unico registro
    render(orphanage: Orphanage){
        return{
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about:orphanage.about,
            instructions:orphanage.instructions,
            opening_hours:orphanage.opening_hours,
            open_on_weekends:orphanage.open_on_weekends,
            images: imagesview.rendermany(orphanage.images),
        };
    },
    //retorna muitos registros com base no primeiro render, sendo assim
    //ele executa varias vezes dentro do arrey a primeira função

    rendermany(orphanages: Orphanage[]){
        return orphanages.map(orphanage=>this.render(orphanage))
    },
};