// Function to fetch business news data from your backend API
async function fetchBusinessNews() {
    const backendApiUrl = 'http://localhost:3000/api/news/business'; // Your backend API endpoint
    try {
        const response = await fetch(backendApiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayBusinessNews(data); // Display the news articles
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display business news articles
function displayBusinessNews(articles) {
    const businessContainer = document.getElementById('business-articles'); 
    businessContainer.innerHTML = ''; // Clear previous content

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article'); // Add a class for styling
        articleElement.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="Business News Image" class="article-image">
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description || 'No description available.'}</p>
            <a href="${article.url}" class="read-more" target="_blank">Read More</a>
        `;
        businessContainer.appendChild(articleElement);
    });
}

// Call the fetchBusinessNews function when the page loads
window.onload = fetchBusinessNews;