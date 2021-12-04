import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bba9b6ea345e4a20b8a317709a46d8e0', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
