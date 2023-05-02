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
    const handleError = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, handleError);

    const { data, isLoading, error } = useGetWeatherQuery({ latitude: latitude, longitude: longitude })
    // console.log(data)
    let content

    if (data) {
        content =
            <div className='weather'>
                <span>{Math.floor(data.main.temp) + '&#x2103;'}</span>
            </div>
    }


    return (
        content
    )
}

export default Weather