import Image from '../models/images';
export default{
    //retorna um unico registro
    render(image: Image) {
        return {
          id: image.id,
          url: `${process.env.API_URL}/uploads/${image.path}`
        };
    },

    //192.168.0.15:19000
    //retorna muitos registros com base no primeiro render, sendo assim
    //ele executa varias vezes dentro do arrey a primeira função
    
    rendermany(images: Image[]){
        return images.map(Image=>this.render(Image))
    },
};