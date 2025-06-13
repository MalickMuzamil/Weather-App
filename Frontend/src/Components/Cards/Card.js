import React from 'react';
import './Card.css'; // This will still contain custom styles

export default function Card({ weather }) {
    const times = ['06:00 AM', '09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM', '12:00 AM'];

    if (!weather || typeof weather !== 'object') {
        return <div className='text-white text-center'>No weather data available</div>;
    }

    return (
        <div className='container my-5'>
            <div className='row justify-content-center'>
                {times.map((time, index) => (
                    <div className='col' key={index}>
                        <div className='card weather-card text-center'>
                            <div className='card-body'>
                                <h5 className='card-title'>{time}</h5>
                                <div className='weather-info'>
                                    <p><strong>Pressure:</strong> {weather.pressure} HPA</p>
                                    <p><strong>Humidity:</strong> {weather.humidity}%</p>
                                    <p><strong>Temperature:</strong> {weather.temp}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
