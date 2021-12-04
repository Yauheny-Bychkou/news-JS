import { Article } from './articles-response';
import { Source } from './sources-response';

export type DataResponse = {
    totalResult: number;
    status: string;
    articles: Article[];
    sources: Source[];
};
