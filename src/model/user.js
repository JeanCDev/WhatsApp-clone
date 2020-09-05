import {Firebase} from './../utils/fireBase';
import { Model } from './model';

export class User extends Model{

    constructor(response) {
        super();
        if (response.user.email) {
            this.getById(response.user.email).then(resp => {
                if (!resp.exists) {
                    this.name = response.user.displayName;
                    this.email = response.user.email;
                    this.photo = response.user.photoURL;
 
                    this.save();
                }
            });
        }
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
                console.log(doc)
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

    // encontrar os dados do usuário pelo email no firestore
    static findUserByEmail(email){

        return User.getRef().doc(email);

    }

}