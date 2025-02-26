# InfoFusion - News Website

The InfoFusion news website developed using Html, Css, Javascript, Nodejs. This project is a dynamic news platform that fetches the latest news articles from various categories such as Politics, Sports, Entertainment, and Business using a third-party API. 

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Contributing](#contributing)

## Introduction

Welcome to the News Website repository! This project is a dynamic news platform that fetches the latest news articles from various categories such as Politics, Sports, Entertainment, and Business using a third-party API. The backend is built with Node.js, and the application is run by executing node server.js in the terminal.

## Technologies Used

- **Node.js:** Backend server to handle API requests and serve the application.
- **Express.js:** Web framework for Node.js to simplify server creation.
- **News API:** External API to fetch the latest news articles.
- **HTML/CSS:** Frontend structure and styling.
- **JavaScript:** Client-side interactivity and dynamic content updates.

## Project Structure


```plaintext
api-news-fetcher/
│
├── public/                  # Static files served to the client
│   ├── images/              # All images used in the project
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   ├── image4.jpg
│   │   ├── image5.jpg
│   │   ├── image6.jpg
│   │   ├── image7.jpg
│   │   └── image8.jpg
│   │
│   ├── js/                  # Client-side JavaScript files
│   │   ├── Contact.js
│   │   ├── fetchBusinessNews.js
│   │   ├── fetchEntertainmentNews.js
│   │   ├── fetchPoliticsNews.js
│   │   ├── fetchSportsNews.js
│   │   └── index.js
│   │
│   └── styles/              # All CSS files
│       ├── business.css
│       ├── contact.css
│       ├── content-queries.css
│       ├── corrections.css
│       ├── design-suggestions.css
│       ├── entertainment.css
│       ├── feedback.css
│       ├── index.css
│       ├── politics.css
│       ├── privacy.css
│       ├── responsive.css
│       ├── sports.css
│       └── terms.css
│
├── views/                   # HTML files (templates)
│   ├── business.html
│   ├── contact.html
│   ├── content-queries.html
│   ├── corrections.html
│   ├── design-suggestions.html
│   ├── entertainment.html
│   ├── feedback.html
│   ├── index.html
│   ├── politics.html
│   ├── privacy.html
│   ├── sports.html
│   └── terms.html
│
├── node_modules/            # Node.js dependencies (auto-generated, do not edit)
│
├── server.js                # Main server file (entry point)
├── package.json             # Node.js dependencies and scripts
├── package-lock.json        # Auto-generated lock file for dependencies
├── Readme.md                # Project documentation
└── .gitignore               # Files and folders to ignore in Git
```


## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/infofusion-news-website.git
   ```
   
2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a .env file in the root directory and add your News API key:
   ```bash
   NEWS_API_KEY=eb6a4b5917164b08a06ae5868354b814
   ```

4. **Run the Application:**

   ```bash
   node server.js
   ```

5. **Access the Website:**

   - Open your browser and navigate to http://localhost:3000.

## Features

- **Multi-Category News:** Fetch and display news from Politics, Sports, Entertainment, and Business.
- **Real-Time Updates:** News is fetched in real-time from a reliable API.
- **Responsive Design:** The website is fully responsive and works seamlessly on all devices.
- **Easy to Use:** Simple and intuitive user interface for easy navigation.


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

---