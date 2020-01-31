import { retrieve } from './retrieve';

const DEFAULT_OPTIONS = {
    method: 'GET',
};

const getDataFetcher = (baseUrl, options = DEFAULT_OPTIONS) => async (endpoint, querystring) => {
    const qs = querystring
        ? `?${Object.entries(querystring).map(([key, value]) => `${key}=${value}`).join('&')}`
        : '' ;
    const url = `${baseUrl}${endpoint}${qs}`;

    const data = await retrieve(url, options);

    // Deliberate delay to mimic latency
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

};

export {
    getDataFetcher,
}
