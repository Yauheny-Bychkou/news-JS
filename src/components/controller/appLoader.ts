import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '800400cefcc64238a269ee560c199887', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
