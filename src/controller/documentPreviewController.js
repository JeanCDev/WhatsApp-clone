const pdfjsLib = require('pdfjs-dist');
const path = require('path');

// inicia a lib de leitura de pdf
pdfjsLib.GlobalWorkerOptions.workerSrc = path.resolve(
    __dirname, 
    '../../dist/pdf.worker.bundle.js');
export class DocumentPreviewController{

    constructor(file){

        this._file = file;

    }

    // faz o preview da imagem ou arquivo
    getPreviewData(){

        return new Promise((resolve, reject)=>{

            let reader = new FileReader();

            switch(this._file.type){
                
                // trata o preview de imagens
                case 'image/png':
                case 'image/jpeg':
                case 'image/jpg':
                case 'image/gif':
                    reader.onload = e =>{
                        
                        resolve({
                            src: reader.result,
                            info: this._file.name,
                            type: this._file.type
                        });

                    }

                    reader.onerror = e =>{
                        
                        reject(e);

                    }

                    reader.readAsDataURL(this._file);
                    break;
                
                // Trata o preview de pdf
                case 'application/pdf':

                    reader.onload = e =>{
                        
                        pdfjsLib.getDocument(new Uint8Array(reader.result)).then(pdf =>{

                            pdf.getPage(1).then(page =>{

                                let viewport = page.getViewport(1);

                                let canvas = document.createElement('canvas');
                                let canvasContext = canvas.getContext('2d');

                                canvas.width = viewport.width;
                                canvas.height = viewport.height;
                                
                                page.render({
                                    canvasContext,
                                    viewport
                                }).then(()=>{
                                    
                                    let s = (pdf.numPages > 1)? 's' : '';

                                    resolve({
                                        src: canvas.toDataURL('image/png'),
                                        info: `${pdf.numPages} página${s}`
                                    })

                                }).catch(err =>{

                                    reject(err);

                                });
                                
                            }).catch(err =>{

                                reject(err)

                            });

                        }).catch(err =>{

                            reject(err);

                        });

                    }

                    reader.readAsArrayBuffer(this._file);

                    break;

                default:
                    reject();
                     break;
            }

        });

    }

}