// Function to fetch politics news data from your backend API
async function fetchPoliticsNews() {
    const apiUrl = "http://localhost:3000/api/politics-news"; // Your backend API endpoint
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const articles = await response.json();
        displayPoliticsNews(articles);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display politics news articles
function displayPoliticsNews(articles) {
    const politicsContainer = document.getElementById('politics-articles'); // Ensure this ID matches your HTML
    politicsContainer.innerHTML = ''; // Clear previous articles

    if (articles.length === 0) {
        politicsContainer.innerHTML = '<p>No articles available.</p>'; // Handle case with no articles
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article'); // Add a class for styling
        articleElement.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="Politics News Image" class="article-image">
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description || 'No description available.'}</p>
            <a href="${article.url}" class="read-more" target="_blank">Read More</a>
        `;
        politicsContainer.appendChild(articleElement);
    });
}

// Function to periodically fetch new news articles
function startPolling() {
    const pollingInterval = 60000; // Poll every 60 seconds (adjust as needed)
    setInterval(fetchPoliticsNews, pollingInterval);
}

// Call the fetchPoliticsNews function when the page loads and start polling
window.onload = () => {
    fetchPoliticsNews(); // Fetch news immediately on page load
    startPolling(); // Start polling for new news
};