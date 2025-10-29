import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
    WiCloud,
    WiHumidity,
    WiBarometer,
    WiStrongWind,
    WiThermometer,
} from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import { InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import Card from "../Cards/Card";

import { toast } from "react-toastify";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        if (!city) {
            toast.warn("Please enter a city name first!");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9accb3aec4ff83f01e4441dbbfe2d744&units=metric`
            );
            const data = res.data;
            setWeather({
                name: data.name,
                temp: Math.round(data.main.temp),
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                description: data.weather[0].description,
            });
            toast.success(`Weather data loaded for ${data.name}!`);
        } catch (err) {
            console.error(err);
            setWeather(null);

            if (err.response && err.response.data && err.response.data.message) {
                toast.error(`Error: ${err.response.data.message}`);
            } else {
                toast.error("Failed to fetch weather data. Please try again.");
            }
        }
        setLoading(false);
    };

    useEffect(() => {
    }, []);

    return (
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}   className="weather-container">
            <div className="text-center mb-4">
                <WiCloud size={70} />
                <h2 className="fw-bold text-gradient">WeatherNow</h2>
                <p className="muted fw-bold mb-0">{new Date().toLocaleTimeString()}</p>
            </div>

            <InputGroup className="mb-4">
                <Form.Control
                    placeholder="Search City..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="custom-input"
                />
                <Button onClick={fetchWeather} disabled={loading} variant="info">
                    {loading ? "Loading..." : <FaSearch />}
                </Button>
            </InputGroup>

            {weather ? (
                <>
                    <motion.div
                        className="text-center mb-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="fw-bold">{weather.name}</h3>
                        <h1 className="display-4 fw-bold">{weather.temp}°C</h1>
                        <p className="text-capitalize muted">{weather.description}</p>
                    </motion.div>

                    <Row className="g-3">
                        {[
                            {
                                icon: <WiThermometer />,
                                label: "Temperature",
                                value: `${weather.temp}°C`,
                            },
                            {
                                icon: <WiHumidity />,
                                label: "Humidity",
                                value: `${weather.humidity}%`,
                            },
                            {
                                icon: <WiBarometer />,
                                label: "Pressure",
                                value: `${weather.pressure} hPa`,
                            },
                            {
                                icon: <WiStrongWind />,
                                label: "Wind",
                                value: `${weather.wind} m/s`,
                            },
                        ].map((item, i) => (
                            <Col key={i} xs={12} sm={6} md={3}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card
                                        icon={item.icon}
                                        label={item.label}
                                        value={item.value}
                                    />
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </>
            ) : (
                <p className="text-center mt-4 text-light">No weather data available</p>
            )}
        </motion.div>
    );
}
