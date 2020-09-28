import {Firebase} from './firebase';

// faz upload de arquivos para o firebase e retorna o link deles
export class Upload{

    static send(file, from) {

        return new Promise((resolve, reject) => {

            let uploadTask = Firebase.hd().ref(from).child(Date.now() + '_' + file.name).put(file);

            uploadTask.on('state_changed', e => {

                console.info('Upload', e);

            }, err => {

                reject(err);

            }, () => {

                resolve(uploadTask.snapshot);

            });
        });

    }

}