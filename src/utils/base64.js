
// Classe para tratar Base64
export class Base64{

    // pega o mimetype que converterá a base 64
    static getMimeType(urlBase64){

        let regex = /^data:(.+);base64,(.*)$/;
        let result = urlBase64.match(regex);
        return result[1];

    }

    // converte a Base 64 para um arquivo
    static toFile(urlBase64){

        let mimeType = Base64.getMimeType(urlBase64);
        let ext = mimeType.split('/')[1];
        let fileName = `file_${Date.now()}.${ext}`;

        return fetch(urlBase64)
            .then(response => { return response.arrayBuffer(); })
            .then(buffer => { return new File([buffer], fileName, {type: mimeType}); });

    }

}