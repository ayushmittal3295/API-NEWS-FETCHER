// Function to fetch politics news data from an API
async function fetchPoliticsNews() {
    const apiUrl = "https://newsapi.org/v2/top-headlines?category=politics&apiKey=eb6a4b5917164b08a06ae5868354b814"; 
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        displayPoliticsNews(data.articles);
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

// Call the fetchPoliticsNews function when the page loads
window.onload = fetchPoliticsNews;