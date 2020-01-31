import { getDataFetcher } from '../utils/getDataFetcher';

const getFlightData = getDataFetcher('https://api.skypicker.com/');

export {
    getFlightData,
};
