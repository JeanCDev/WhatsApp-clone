import {Firebase} from './../utils/fireBase';
import { Model } from './model';

export class User extends Model{

    constructor(id) {
        super();
        
        this._data = {}

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

    // pegar o usuário pela referência do email
    getById(id){

        return new Promise((resolve, reject) => {

            User.findUserByEmail(id).onSnapshot(doc =>{
                
                this.fromJSON(doc.data());
                
                resolve(doc);

            })

        }).catch(err => reject(err));;

    }

    // salvar conexão no firestore
    save(){

        return User.findUserByEmail(this.email).set(this.toJSON());

    }

    // pegar referência dos dados do usuário no firestore
    static getRef(){

        return Firebase.db().collection('/users');

    }

    // encontrar os dados do usuário pelo email no firestore
    static findUserByEmail(email){

        return User.getRef().doc(email);

    }

    // adicionar novo contato
    addContact(contact){

        return User.getRef()
            .doc(this.email)
            .collection('contacts')
            .doc(btoa(contact.email))
            .set(contact.toJSON());

    }

}