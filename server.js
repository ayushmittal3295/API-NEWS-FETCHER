const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); 

async function fetchNews(category) {
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=eb6a4b5917164b08a06ae5868354b814`;
    

    try {
        const response = await axios.get(apiUrl);
        return response.data.articles;
    } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
        throw error;
    }
}

// Define a route to get news based on category
app.get('/api/news/:category', async (req, res) => {
    const category = req.params.category;
    const validCategories = ['politics', 'sports', 'entertainment', 'business'];

    if (!validCategories.includes(category)) {
        return res.status(400).json({ message: 'Invalid category' });
    }

    try {
        const articles = await fetchNews(category);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: `Error fetching ${category} news` });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});