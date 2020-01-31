// import { getFlightData } from './getFlightData';
import { getWeatherForecast } from './getWeatherForecast';

const weatherForecastData = {
    /*
        Normally I wouldn't commit the api key to GIT, but for demo purposes this is 'fine'. For a
        real application I would set the api key as a ENV varibale and retrieve it from there.
    */
   'api-key': 'DljJrLBAViQR4Ibw4wW2bFGx1hM0NaDG',
   metric: true,
};

const getAllData = async () => await new Promise(async (resolve, reject) => {
    setTimeout(() => {
        reject(new Error('timeout'));
    }, 5000);

    try {
        const data = await Promise.all([
            // getFlightData(),
            getWeatherForecast('/forecasts/v1/daily/5day/249758', weatherForecastData),
        ]);
        resolve(data);
    } catch (e) {
        reject(e);
    }
});

export {
    getAllData,
};
