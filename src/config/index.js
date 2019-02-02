
const URLS = {
    'signup' : 'http://api.noi.lk:3000/api/v1/signup'
}

class API {

    constructor (option) {

        if (URLS.hasOwnProperty(option)) {
            this.URL = URLS[option];
        }else {
            this.URL = '';
        }

    }

    getURL() {
        return this.URL;
    }

}

export {API};