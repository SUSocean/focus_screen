import { useGetWeatherQuery } from '../api/weatherApi';
import { useState } from 'react';

const Weather = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const success = (pos) => {
        const crd = pos.coords;
        setLatitude(crd.latitude)
        setLongitude(crd.longitude)
    }

    navigator.geolocation.getCurrentPosition(success);

    const { data, isLoading, error } = useGetWeatherQuery({ latitude: latitude, longitude: longitude })

    let content
    if (isLoading) {
        content = <p className='weather'>Loading..</p>
    }
    if (error) {
        content = <p className='weather-error'>couldn't get current location</p>
    }
    if (data) {
        content =
            <div className='weather'>
                <div>
                    <img alt={data.weather[0].main} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
                    <span>{Math.floor(data.main.temp) + '°C'}</span>
                </div>
                <p>{data.name}</p>
            </div>
    }
    return (
        content
    )
}

export default Weather