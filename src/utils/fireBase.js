const firebase = require('firebase');
require('firebase/firestore');

export class Firebase{

    // configuração do firebase
    constructor(){

        this._config = {
            apiKey: "AIzaSyAeTTfzKRFB9I2FUCulB506zHuIRW1zYZE",
            authDomain: "whatsapp-clone-4e4f1.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-4e4f1.firebaseio.com",
            projectId: "whatsapp-clone-4e4f1",
            storageBucket: "gs://whatsapp-clone-4e4f1.appspot.com/",
            messagingSenderId: "651301317991",
            appId: "1:651301317991:web:5e753961cf6d890c4813c2"
          };

        this.init();

    }

    // inicia o firebase 
    init(){
          
        if(!window._initializedFirebase){
          
          firebase.initializeApp(this._config);

          firebase.firestore().settings({});
          
          window._initialized = true;

        }
    }

    // inicia o banco de dados 
    static db(){

        return firebase.firestore();

    }

    // inicia o storage do firebase
    static hd(){

        return firebase.storage();

    }

    // iniciar autenticação do firebase com conta do Google
    initAuth(){

        return new Promise((resolve, reject) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {

                    let token = result.credential.accessToken;
                    let user = result.user;

                    resolve({
                        user, 
                        token
                    });

                })
                .catch(err =>{
                    reject(err);
                });

        })

    }

}