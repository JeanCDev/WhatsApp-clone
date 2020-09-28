import { Model } from './model';
import { Firebase } from '../utils/firebase';

export class Chat extends Model{

    constructor(){ 

        //super();

    }

    // pegar e setar os usuários do chat
    get users(){ return this._data.users; }
    set users(value){ this._data.users = value; }

    // pegar e setar a data de criação do chat
    get timestamp(){ return this._data.timestamp; }
    set timestamp(value){ this._data.timestamp = value; }

    // pegar a referência dos chats
    static getRef(){

        return Firebase.db().collection('chats');

    }

    // cria um novo chat
    static create(meEmail, contactEmail){

        return new Promise((resolve, reject) => {

            let users = {};

            users[btoa(meEmail)] = true;
            users[btoa(contactEmail)] = true;

            Chat.getRef().add({
                users,
                timeStamp: new Date()
            }).then(doc =>{

                Chat.getRef().doc(doc.id).get().then(chat =>{

                    resolve(chat);

                }).catch(err => { reject(err); });

            }).catch(err => { reject(err); });

        });

    }

    // procura um chat com o email dos usuários
    static find(meEmail, contactEmail){
        return Chat.getRef()
            .where(btoa(meEmail), '==', true)
            .where(btoa(contactEmail), '==', true)
            .get();
    }

    // verifica se o chat existe e se não cria um novo
    static createIfNotExists(meEmail, contactEmail){ 
        return new Promise((resolve, reject) => {

            Chat.find(meEmail, contactEmail).then((chats)=>{

                if(chats.empty){

                    Chat.create(meEmail, contactEmail).then(chat =>{

                        resolve(chat);

                    });

                } else{

                    chats.forEach(chat =>{

                        resolve(chat);

                    });

                }

            }).catch(err =>{ reject(err); });

        });
    }

}