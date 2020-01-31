import { getDataFetcher } from '../utils/getDataFetcher';

const options = {
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
    }),
};
const getWeatherForecast = getDataFetcher('http://dataservice.accuweather.com/', options);

export {
    getWeatherForecast,
};
