import React, { useState, useEffect } from 'react';
import './Weather.css';
import img from "../../images/forecast.png";
import Card from '../Cards/Card';
import axios from "axios";
import Card2 from '../Card-Data-display/Card2';

export default function Weather() {
    const [time, setTime] = useState(new Date());
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const handleChanged = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const onHandleSubmit = async (e) => {

        e.preventDefault();

        console.log("input :", search)
        const url = "/search"

        if (search === "") {
            alert("Invalid Input Fid")
        }

        else {
            let body = {
                inputValue: search
            }


            const response = await axios.post(`http://localhost:3001${url}`, body)
            console.log(response)

            setSearch(' ')
            setWeather(" ")

            if (response.status === 200) {
                setWeather(response.data.weather);
            }

            else {
                console.log("Function shi nai chl rha.")
            }
        }

    }

    return (
        <>
            <div className='background-image container-fluid pxx-0'>
                <div className='container blur-overlay d-flex justify-content-center align-items-center'>
                    <div className='row background-border cards' >
                        <div className='row align-items-center justify-content-center positions-row mb-5'>
                            <div className='col-5'>
                                <img src={img} alt="Weather Forecast" className='cloud-image' />
                            </div>
                            <div className='col-7'>
                                <h4 className='text-start text-white time-text'>{time.toLocaleTimeString()}</h4>
                            </div>
                        </div>

                        <form onSubmit={onHandleSubmit}>
                            <div className='d-flex justify-content-center my-5'>
                                <input
                                    type="text"
                                    placeholder='Search City....'
                                    className='form-control custom-input w-50'
                                    value={search}
                                    onChange={handleChanged}
                                />
                            </div>
                        </form>

                        <div className="row justify-content-around my-3 px-0">
                            <div className="col-md-4 pe-0">
                                <Card2 title="Temperature" data={weather && weather.temp} />
                            </div>
                            <div className="col-md-4 pe-0">
                                <Card2 title="Humidity" data={weather && weather.humidity} />
                            </div>
                            <div className="col-md-4 pe-0">
                                <Card2 title="Pressure" data={weather && weather.pressure} />
                            </div>
                        </div>

                        <Card weather={weather} />

                    </div>
                </div>
            </div>
        </>
    )
}
