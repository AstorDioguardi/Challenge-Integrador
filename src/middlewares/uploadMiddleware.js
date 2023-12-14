import multer from 'multer';
import { resolve } from 'path';

const destination = (req, file, cb) => {
    cb(null, resolve() + '/public/assets/img');
}

const filename = (req, file, cb) => {
    const time = new Date()
        .toString()
            .replace(/ /g, '_') //reemplaza los espacios de la fecha de subida la imagen por guiones bajo
            .replace(/:/g, '-') //reemplaza los dos puntos de la hora de subida la imagen por guiones medio
            .slice(0, 33); //recorta la ultima parte del Date()

    cb(null, time + '_' + file.originalname);
}

const config = {destination, filename};
const storage = multer.diskStorage(config);
export const uploadMiddleware = multer({ storage });