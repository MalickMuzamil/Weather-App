import express from 'express'
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const API__key = process.env.Weather_Api

const SearchModuleFunction = async (req, res) => {

    try {

        const search_Query = req.body.inputValue
        console.log(search_Query)

        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${search_Query}&appid=${API__key}&units=metric`;

        console.log(apiUrl)
        const response = await axios.get(apiUrl);
        console.log(response)


        const weatherData = {
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure
        }

        res.status(200).send({ weather: weatherData, status: 200, message: "weather retrieved successfully" })

    }

    catch (error) {
        res.status(404).send("Function not working properly.")
    }
};

export default SearchModuleFunction;