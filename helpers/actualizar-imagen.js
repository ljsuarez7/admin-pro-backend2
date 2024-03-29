const fs = require('fs');
const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const borrarImagen = (path) => {
    if(fs.existsSync(path)){
        //borramos la imagen anterior
        fs.unlinkSync(path);
    }
}

const actualizarImagen = async (tipo, id, nombreArchivo) => {

    let pathViejo = '';

    switch(tipo){
        case 'medicos':

            const medico = await Medico.findById(id);

            if(!medico){
                console.log('No se encontró el medico por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${medico.img}`;
            borrarImagen(pathViejo);

            medico.img = nombreArchivo;
            await medico.save();
            return true;

            break;

        case 'hospitales':

            const hospital = await Hospital.findById(id);

            if(!hospital){
                console.log('No se encontró el hospital por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${hospital.img}`;
            borrarImagen(pathViejo);

            hospital.img = nombreArchivo;
            await hospital.save();
            return true;

            break;

        case 'usuarios':

            usuario = await Usuario.findById(id);

            if(!usuario){
                console.log('No se encontró el usuario por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${usuario.img}`;
            borrarImagen(pathViejo);

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

            break;
    }

}

module.exports = {
    actualizarImagen
}