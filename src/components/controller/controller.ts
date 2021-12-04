import { DataResponse } from '../types/data-response';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: DataResponse) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: DataResponse) => void) {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
            if ((<Element>target).classList.contains('source__item')) {
                const sourceId: string = (<Element>target).getAttribute('data-source-id')!;
                if ((<Element>newsContainer).getAttribute('data-source') !== sourceId) {
                    (<Element>newsContainer).setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;
