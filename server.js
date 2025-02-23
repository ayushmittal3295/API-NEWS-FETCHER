const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes

// Function to fetch politics news data from the News API
async function fetchPoliticsNews() {
    const apiUrl = "https://newsapi.org/v2/top-headlines?category=politics&apiKey=eb6a4b5917164b08a06ae5868354b814"; // Replace with your actual API key
    try {
        const response = await axios.get(apiUrl);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

// Define a route to get politics news
app.get('/api/politics-news', async (req, res) => {
    try {
        const articles = await fetchPoliticsNews();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching politics news' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});