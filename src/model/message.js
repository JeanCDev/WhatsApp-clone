import { Model } from './model';
import { Firebase } from '../utils/fireBase';
import { Format } from '../utils/format';

export class Message extends Model{

    constructor(){
        super();
    }

    get id(){ return this._data.id; }
    set id(value){ this._data.id = value }

    get content(){ return this._data.content; }
    set content(value){ this._data.content = value }

    get type(){ return this._data.type; }
    set type(value){ this._data.type = value }

    get timeStamp(){ return this._data.timeStamp; }
    set timeStamp(value){ this._data.timeStamp = value }

    get status(){ return this._data.status; }
    set status(value){ this._data.status = value }

    getViewElement(me = true){

        let div = document.createElement('div');
        div.className = 'message';

        switch (this.type) {

            case 'contact':
                div.innerHTML = `
                <div class="_3_7SH kNKwo tail">
                    <span class="tail-container"></span>
                    <span class="tail-container highlight"></span>
                    <div class="_1YNgi copyable-text">
                        <div class="_3DZ69" role="button">
                            <div class="_20hTB">
                                <div class="_1WliW" style="height: 49px; width: 49px;">
                                    <img src="#" class="Qgzj8 gqwaM photo-contact-sended" style="display:none">
                                    <div class="_3ZW2E">
                                        <span data-icon="default-user">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                                                <path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path>
                                                <g fill="#FFF">
                                                    <path d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="_1lC8v">
                                <div dir="ltr" class="_3gkvk selectable-text invisible-space copyable-text">Nome do Contato Anexado</div>
                            </div>
                            <div class="_3a5-b">
                                <div class="_1DZAH" role="button">
                                    <span class="message-time">17:01</span>
                                    <div class="message-status">
                                        <span data-icon="msg-dblcheck">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                                                <path fill="#92A58C" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_6qEXM">
                            <div class="btn-message-send" role="button">Enviar mensagem</div>
                        </div>
                    </div>

                </div>
                `;
                break;

            case 'image':
                div.innerHTML = `
                <div class="_3_7SH _3qMSo">
                    <div class="KYpDv">
                        <div>
                            <div class="_3v3PK" style="width: 330px; height: 330px;">
                                <div class="_34Olu">
                                    <div class="_2BzIU">
                                        <div class="_2X3l6">
                                            <svg class="_1UDDE" width="50" height="50" viewBox="0 0 43 43">
                                                <circle class="_3GbTq _2wGBy" cx="21.5" cy="21.5" r="20" fill="none" stroke-width="3"></circle>
                                            </svg>
                                        </div>
                                        <div class="_1l3ap">
                                            <span data-icon="media-disabled" class="">
                                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
                                                    <path fill="#FFF" fill-opacity=".4" d="M29.377 16.099l-1.475-1.475L22 20.525l-5.901-5.901-1.476 1.475L20.525 22l-5.901 5.901 1.476 1.475 5.9-5.901 5.901 5.901 1.475-1.475L23.475 22l5.902-5.901z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <img src="#" class="_1JVSX message-photo" style="width: 100%; display:none">
                                <div class="_1i3Za"></div>
                            </div>
                            <div class="message-container-legend">
                                <div class="_3zb-j ZhF0n">
                                    <span dir="ltr" class="selectable-text invisible-space copyable-text message-text">Texto da foto</span>
                                </div>
                            </div>
                            <div class="_2TvOE">
                                <div class="_1DZAH text-white" role="button">
                                    <span class="message-time">17:22</span>
                                    <div class="message-status">
                                        <span data-icon="msg-check-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                                                <path fill="#FFF" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="_3S8Q-" role="button">
                        <span data-icon="forward-chat">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
                                <path fill="#FFF" d="M14.2 9.5V6.1l5.9 5.9-5.9 6v-3.5c-4.2 0-7.2 1.4-9.3 4.3.8-4.2 3.4-8.4 9.3-9.3z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                `;
                break;

            case 'document':
                div.innerHTML = `
                <div class="_3_7SH _1ZPgd">
                    <div class="_1fnMt _2CORf">
                        <a class="_1vKRe" href="#">
                            <div class="_2jTyA" style="background-image: url()"></div>
                            <div class="_12xX7">
                                <div class="_3eW69">
                                    <div class="JdzFp message-file-icon icon-doc-pdf"></div>
                                </div>
                                <div class="nxILt">
                                    <span dir="auto" class="message-filename">Arquivo.pdf</span>
                                </div>
                                <div class="_17viz">
                                    <span data-icon="audio-download" class="message-file-download">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34">
                                            <path fill="#263238" fill-opacity=".5" d="M17 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S2 25.3 2 17 8.7 2 17 2m0-1C8.2 1 1 8.2 1 17s7.2 16 16 16 16-7.2 16-16S25.8 1 17 1z"></path>
                                            <path fill="#263238" fill-opacity=".5" d="M22.4 17.5h-3.2v-6.8c0-.4-.3-.7-.7-.7h-3.2c-.4 0-.7.3-.7.7v6.8h-3.2c-.6 0-.8.4-.4.8l5 5.3c.5.7 1 .5 1.5 0l5-5.3c.7-.5.5-.8-.1-.8z"></path>
                                        </svg>
                                    </span>
                                    <div class="_3SUnz message-file-load" style="display:none">
                                        <svg class="_1UDDE" width="32" height="32" viewBox="0 0 43 43">
                                            <circle class="_3GbTq _37WZ9" cx="21.5" cy="21.5" r="20" fill="none" stroke-width="3"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="_3cMIj">
                            <span class="PyPig message-file-info">32 páginas</span>
                            <span class="PyPig message-file-type">PDF</span>
                            <span class="PyPig message-file-size">4 MB</span>
                        </div>
                        <div class="_3Lj_s">
                            <div class="_1DZAH" role="button">
                                <span class="message-time">18:56</span>
                                <div class="message-status">
                                    <span data-icon="msg-time">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                                            <path fill="#859479" d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                break;

            case 'audio':
                div.innerHTML = `
                <div class="_3_7SH _1ZPgd">
                    <div class="_1fnMt _2CORf">
                        <a class="_1vKRe" href="#">
                            <div class="_2jTyA" style="background-image: url()"></div>
                            <div class="_12xX7">
                                <div class="_3eW69">
                                    <div class="JdzFp message-file-icon icon-doc-pdf"></div>
                                </div>
                                <div class="nxILt">
                                    <span dir="auto" class="message-filename">Arquivo.pdf</span>
                                </div>
                                <div class="_17viz">
                                    <span data-icon="audio-download" class="message-file-download">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34">
                                            <path fill="#263238" fill-opacity=".5" d="M17 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S2 25.3 2 17 8.7 2 17 2m0-1C8.2 1 1 8.2 1 17s7.2 16 16 16 16-7.2 16-16S25.8 1 17 1z"></path>
                                            <path fill="#263238" fill-opacity=".5" d="M22.4 17.5h-3.2v-6.8c0-.4-.3-.7-.7-.7h-3.2c-.4 0-.7.3-.7.7v6.8h-3.2c-.6 0-.8.4-.4.8l5 5.3c.5.7 1 .5 1.5 0l5-5.3c.7-.5.5-.8-.1-.8z"></path>
                                        </svg>
                                    </span>
                                    <div class="_3SUnz message-file-load" style="display:none">
                                        <svg class="_1UDDE" width="32" height="32" viewBox="0 0 43 43">
                                            <circle class="_3GbTq _37WZ9" cx="21.5" cy="21.5" r="20" fill="none" stroke-width="3"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="_3cMIj">
                            <span class="PyPig message-file-info">32 páginas</span>
                            <span class="PyPig message-file-type">PDF</span>
                            <span class="PyPig message-file-size">4 MB</span>
                        </div>
                        <div class="_3Lj_s">
                            <div class="_1DZAH" role="button">
                                <span class="message-time">18:56</span>
                                <div class="message-status">
                                    <span data-icon="msg-time">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                                            <path fill="#859479" d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                break;

            default:
                div.innerHTML = `
                <div class="font-style _3DFk6 tail" id="_${this.id}">
                    <span class="tail-container"></span>
                    <span class="tail-container highlight"></span>
                    <div class="Tkt2p">
                        <div class="_3zb-j ZhF0n">
                            <span dir="ltr" class="selectable-text invisible-space message-text">${this.content}</span>
                        </div>
                        <div class="_2f-RV">
                            <div class="_1DZAH">
                                <span class="msg-time">${Format.timeStampToTime(this.timeStamp)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        }

        let className = (me) ? 'message-out' : 'message-in'

        div.firstElementChild.classList.add(className);

        return div;

    }

    static send(chatId, from, type, content){
        
        return Message.getRef(chatId).add({
            content,
            timeStamp: new Date(),
            status: 'wait',
            type,
            from 
        });

    }

    static getRef(chatId){

        return Firebase.db()
            .collection('chats')
            .doc(chatId)
            .collection('messages');

    }

}