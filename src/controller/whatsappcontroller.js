class WhatsAppController{

    constructor(){

        this.elementsPrototype();
        this.loadElements();
        this.initEvents();

    }

    // carrega os elementos pelo id dinamicamente
    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element =>{

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }

    // ferramentas
    elementsPrototype(){

        // esconde elemento
        Element.prototype.hide = function(){
            this.style.display = 'none';
            return this;
        }

        //mostra elemento
        Element.prototype.show = function(){
            this.style.display = 'block';
            return this;
        }

        // esconde ou mostra elemento conforme o estado
        Element.prototype.toggle = function(){
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        // adiciona eventListener em um elemento
        Element.prototype.on = function(events, fn){
            events.split(' ').forEach(event =>{
                this.addEventListener(event, fn);
            });
            return this;
        }

        // adiciona stylos css em um elemento
        Element.prototype.css = function (styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        // adiciona uma classe ao elemento
        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }

        // remove uma classe do elemento
        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }

        // dá toggle em uma classe no elemento
        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }

        //determina se o elemento contem a classe indicada
        Element.prototype.hasClass = function (name) {
            return this.classList.contains(name);
        }

        // cria um formulário no 
        HTMLFormElement.prototype.getForm = function () {
            return new FormData(this);
        }

        // cria um JSON com os dados do formElement do HTML
        HTMLFormElement.prototype.toJSON = function () {
            let json = {};

            this.getForm().forEach((value, key)=>{
                json[key] = value;
            });

            return json;
        }

    }

    //inicia os eventos
    initEvents(){

        // Eventos do menu de adicionar contatos
        this.el.btnNewContact.on('click', e =>{

            this.closeAllLeftPanels();
            this.el.panelAddContact.show();
            setTimeout(()=>{
                this.el.panelAddContact.addClass('open');
            }, 300);

        });

        this.el.formPanelAddContact.on('submit', e=>{
            e.preventDefault();

            let formData = new FormData(this.el.formPanelAddContact);
        });

        this.el.btnClosePanelAddContact.on('click', e=>{
            this.el.panelAddContact.removeClass('open');
        });

        // eventos da edição do perfil
        this.el.myPhoto.on('click', e =>{

            this.closeAllLeftPanels();
            this.el.panelEditProfile.show();
            setTimeout(()=>{
                this.el.panelEditProfile.addClass('open');
            }, 300);
            
        });

        this.el.btnClosePanelEditProfile.on('click', e=>{
            this.el.panelEditProfile.removeClass('open');
        });

        this.el.photoContainerEditProfile.on('click', e=>{
            this.el.inputProfilePhoto.click();
        });

        this.el.inputNamePanelEditProfile.on('keypress', e=>{
            if(e.key === 'Enter'){

                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();

            }
        });

        this.el.btnSavePanelEditProfile.on('click', e=>{
            console.log(this.el.inputNamePanelEditProfile.innerHTML);
        });

        // Eventos da lista de contatos
        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item =>{

            item.on('click', e=>{

                this.el.home.hide();
                this.el.main.css({
                    display:'flex'
                });
            });

        });

        // Eventos do menu de anexos

        //abrer menu de anexos
        this.el.btnAttach.on('click', e=>{

            e.stopPropagation();
            this.el.menuAttach.addClass('open');
            document.addEventListener('click', this.closeMenuAttach.bind(this));

        });

        // eventos de enviar foto
        this.el.btnAttachPhoto.on('click', e=>{
            this.el.inputPhoto.click();
        });

        this.el.inputPhoto.on('change', e=>{
            console.log(this.el.inputPhoto.files);

            [...this.el.inputPhoto.files].forEach(file=>{
                console.log(file);
            });
        });

        // eventos de enviar foto da camera
        this.el.btnAttachCamera.on('click', e=>{
            
            this.closeAllMainPanel();
            this.el.panelCamera.addClass('open');
            this.el.panelCamera.css({
                'height':'100%'
            });

        });

        this.el.btnClosePanelCamera.on('click', e=>{

            this.closeAllMainPanel()
            this.el.panelMessagesContainer.show();

        });

        this.el.btnTakePicture.on('click', e=>{
            console.log('Tira foto');
        });

        // eventos de enviar documeto
        this.el.btnAttachDocument.on('click', e=>{
            console.log('Document');
        });

        this.el.btnAttachDocument.on('click', e=>{

            this.closeAllMainPanel();
            this.el.panelDocumentPreview.addClass('open');
            this.el.panelDocumentPreview.css({
                'height':'100%'
            });

        });

        this.el.btnClosePanelDocumentPreview.on('click', e=>{

            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();

        });

        this.el.btnSendDocument.on('click', e=>{

            console.log('Send Document');

        });

        // eventos de enviar contato
        this.el.btnAttachContact.on('click', e=>{

            this.el.modalContacts.show();

        });

        this.el.btnCloseModalContacts.on('click', e=>{

            this.el.modalContacts.hide();

        });
        
    }

    //fecha todos os paineis principais
    closeAllMainPanel(){

        this.el.panelMessagesContainer.hide();
        this.el.panelDocumentPreview.removeClass('open');
        this.el.panelCamera.removeClass('open');

    }

    // Fecha menu de anexos
    closeMenuAttach(e){

        document.removeEventListener('click', this.closeMenuAttach);
        this.el.menuAttach.removeClass('open');

    }

    // Fecha paineis abertos no momento de abertura de outro
    closeAllLeftPanels(){
        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();
    }

}