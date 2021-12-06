import { DataResponse } from '../types/data-response';
type Options = {
    sources?: string;
    apiKey?: string;
};

type OptionsResp = {
    endpoint: string;
    options?: Options;
};

interface ILoader {
    baseLink: string;
    options: Options;
    getResp: ({ endpoint: string, options: Options }: OptionsResp, callback: (data: DataResponse) => void) => void;
    errorHandler: (res: Response) => void;
    makeUrl: (options: Options, endpoint: string) => string;
    load: (method: string, endpoint: string, callback: (data: DataResponse) => void, options: Options) => void;
}
export default ILoader;
