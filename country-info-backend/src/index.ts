import axios from 'axios';
import cors from 'cors';
import 'dotenv';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/countries', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).json({ error: 'Failed to fetch countries' });
    }
});

app.get('/api/country-info/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;

    try {
        const bordersResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        
        if (!bordersResponse.data || bordersResponse.data.length === 0) {
            return res.status(404).json({ error: 'Country not found' });
        }

        const countryInfo = bordersResponse.data[0];
        const flag = `https://countriesnow.space/api/v0.1/countries/flag/images/${countryCode}`;
        
        const populationResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`);
        const populationData = populationResponse.data.data.find(item => item.country === countryInfo);

        res.json({
            name: countryInfo,
            flag: flag,
            countryCode: countryCode,
            borders: countryInfo || [],
            population: populationData ? populationData.population : null,
        });
    } catch (error) {
        console.error('Error fetching country info:', error);
        res.status(500).json({ error: 'Failed to fetch country info' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
