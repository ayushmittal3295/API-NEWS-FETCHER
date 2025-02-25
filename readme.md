# InfoFusion - News Website

The InfoFusion news website developed using Html, Css, Javascript, Nodejs. This project is a dynamic news platform that fetches the latest news articles from various categories such as Politics, Sports, Entertainment, and Business using a third-party API. 

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [How to Use](#how-to-use)
- [Testing](#testing)
- [Contributing](#contributing)

## Introduction

Welcome to the News Website repository! This project is a dynamic news platform that fetches the latest news articles from various categories such as Politics, Sports, Entertainment, and Business using a third-party API. The backend is built with Node.js, and the application is run by executing node server.js in the terminal.

## Technologies Used

**Backend:** Node.js
**API:** News API (or any other news API)
**Frontend**: HTML, CSS, JavaScript (optional, if you have a frontend)
**Package Manager:** npm

## Project Structure


```plaintext
apinewsfetcher/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── onlinevoting/
│   │   │           ├── dao/
│   │   │           ├── model/
│   │   │           ├── service/
│   │   │           └── servlet/
│   │   ├── resources/
│   │   ├── webapp/
│   │       ├── WEB-INF/
│   │       │   └── web.xml
│   │       ├── css/
│   |       ├── js/
│   │       └── jsp/
│   └── test/
│       ├── java/
│       │   └── com/
│       │       └── onlinevoting/
│       │           └── test/
│       └── resources/
└── pom.xml
```


## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ayushmittal3295/Online-Voting-System.git
   ```
   
2. **Set up the development environment:**

   - Install JDK (Java Development Kit)
   - Set up your IDE (Eclipse, IntelliJ, etc.)
   - Install Apache Tomcat server

3. **Configure the database:**

   - Install MySQL
   - Create the database and tables using the provided schema

4. **Configure the project:**

   - Update the `src/main/resources/db.properties` file with your database credentials

5. **Build and deploy the project:**

   - Use Maven to build the project
   - Deploy the WAR file to the Tomcat server from the webapps directory.

## Features

### Review 1

- **Project Setup:**
  - Create a new project with JDK setup
  - Define the project structure
  - Design the database schema for the project
  - Create MySQL tables
  - Implement JDBC for database connectivity
  - Create DAO classes for database operations

### Review 2

- **User Management:**
  - Design HTML templates for user management
  - Style HTML templates using CSS and Bootstrap
  - Implement JavaScript for form validation and interactivity

### Review 3

- **Servlets and JSP Integration:**
  - Create and configure Servlets
  - Implement `doGet` and `doPost` methods
  - Implement user form registration and profile using Servlets
  - Integrate JSP with Servlets
  - Implement JSP pages for displaying user data
  - Use JSTL and EL in JSP pages

### Review 4

- **Testing and Documentation:**
  - Create unit tests for service and DAO layers using JUnit
  - Perform a final review of the project
  - Prepare project documentation

## How to Use

1. **Register as a new user:**
   - Go to the registration page and create an account

2. **Log in:**
   - Use your credentials to log in

3. **Participate in elections:**
   - View available elections and candidates
   - Cast your vote

4. **Admin functionalities:**
   - Create new elections
   - Add candidates to elections
   - View voting results

## Testing

Unit tests are created using JUnit. To run the tests:

1. **Navigate to the test directory:**

   ```bash
   cd src/test/java/com/Online-Voting/test
   ```

2. **Run the tests:**

   ```bash
   mvn test
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

---