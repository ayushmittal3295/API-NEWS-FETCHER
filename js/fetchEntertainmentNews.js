// Function to fetch entertainment news data from an API
async function fetchEntertainmentNews() {
    const apiUrl = "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=eb6a4b5917164b08a06ae5868354b814" ; 
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        displayEntertainmentNews(data.articles);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display entertainment news articles
function displayEntertainmentNews(articles) {
    const entertainmentContainer = document.getElementById('entertainment-articles'); // Ensure this ID matches your HTML
    entertainmentContainer.innerHTML = ''; // Clear previous articles

    if (articles.length === 0) {
        entertainmentContainer.innerHTML = '<p>No articles available.</p>'; // Handle case with no articles
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article'); // Add a class for styling
        articleElement.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="Entertainment News Image" class="article-image">
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description || 'No description available.'}</p>
            <a href="${article.url}" class="read-more" target="_blank">Read More</a>
        `;
        entertainmentContainer.appendChild(articleElement);
    });
}

// Call the fetchEntertainmentNews function when the page loads
window.onload = fetchEntertainmentNews;