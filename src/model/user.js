import {Firebase} from './../utils/fireBase';
import { Model } from './model';

export class User extends Model{

    constructor(id) {
        super();

        if(id) this.getById(id);

    }

    // pegar e setar o nome do usuário
    get name(){ return this._data.name }
    set name(value){ this._data.name = value; }

    // pegar e setar o email do usuário
    get email(){ return this._data.email }
    set email(value){ this._data.email = value; }

    // pegar e setar a foto do usuário
    get photo(){ return this._data.photo }
    set photo(value){ this._data.photo = value; }

    // pegar e setar p Id do chat do usuário
    get chatId(){ return this._data.chatId; }
    set chatId(value){ this._data.chatId = value; }

    // pegar o usuário pela referência do email
    getById(id){

        return new Promise((resolve, reject) => {

            User.findUserByEmail(id).onSnapshot(doc =>{
                
                this.fromJSON(doc.data());
                
                resolve(doc);

            });

        });

    }

    // salvar conexão no firestore
    save(){

        return User.findUserByEmail(this.email).set(this.toJSON());

    }

    // pegar referência dos dados do usuário no firestore
    static getRef(){

        return Firebase.db().collection('/users');

    }

    // pega a referência dos contatos no firestore
    static getContactsRef(id){

        return User.getRef()
                .doc(id)
                .collection('contacts')

    }

    // encontrar os dados do usuário pelo email no firestore
    static findUserByEmail(email){

        return User.getRef().doc(email);

    }

    // adicionar novo contato
    addContact(contact){

        return User.getContactsRef(this.email)
            .doc(btoa(contact.email))
            .set(contact.toJSON());

    }

    // pegar a lista de contatos do Firebase
    getContacts(filter = ''){

        return new Promise((resolve, reject) =>{

            User.getContactsRef(this.email).where('name', '>=', filter).onSnapshot(docs => {

                let contacts = [];

                docs.forEach(doc => {

                    let data = doc.data();

                    data.id = data.id;

                    contacts.push(data);

                });

                this.trigger('contactschange', docs);

                resolve(contacts);

            });


        });

    }

}