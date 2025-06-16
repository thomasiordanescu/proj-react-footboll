# FootyLeague - A Football Application Built with React. 
*A Football application that delivers real-time league stats and team information.*

## Overview
**FootyLeague** is a web application that lets users browse different football league tables by seasons and explore information about the team through dynamic API integration. Built with **React**, the web app gathers live football data from [TheSportDB API](https://www.thesportsdb.com/) to show the user:
- Leage standings for the selected seasons.
- Detailed team information (such as team name, description of the team, team logos etc.) when you click on the football team of your choice.

## FootyLeague - API
The API we've used for this React project is called **TheSportDB API** to fetch dynamic football data.

### What we used the API for:
- **League Table:** Shows the season table for a selected season and league (by choosing a specific year).
- **Team Info:** Shows detailed team information (team name, logo, team description etc.) when the user hovers over a team and clicks on the team for more info.

### The API endpoints used in this project
| Purpose                          | API Endpoint                                                                 |
|----------------------------------|------------------------------------------------------------------------------|
| To aceess League Status (Season)            | `https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=LEAGUE_ID&s=YYYY-YYYY` |
| Get Team Information             | `https://www.thesportsdb.com/api/v1/json/123/lookupteam.php?id=TEAM_ID`             |


## Why we chose React over other competitive JS frameworks
We chose to use **React** in FootyLeague for the following reasons:
### 1. React's Component-based Architecture
React allows us to break down the UI into reusable, modular components like LeagueForm, LeagueTable, and Team. This made our app scalable, maintainable, and easier to debug.

### 2. React's Virtual DOM
React’s Virtual DOM ensures lightning-fast rendering. When a user switches between seasons or selects a team, React only updates what’s necessary. This is ideal for football apps where real-time interactivity and responsiveness are key.

### 3. React's Vast Ecosystem and Community
React has a vast ecosystem and community:
- **Routing:** React Router
- **State management:** Context API (or Redux if we choose to scale further)
- **HTTP requests:** Axios or Fetch API
- **Tooling:** Create React App for rapid bootstrapping

### Comparison: React vs. Angular & Vue
| Feature        | React         | Vue                          | Angular            |
| -------------- | ---------------- | ---------------------------- | ------------------ |
| Popularity     | ✅ Widely adopted | 🔸 Growing                   | 🔸 Enterprise use  |
| Learning Curve | ✅ Easy       | ✅ Easy/Medium                       | ❌ Hard            |
| Performance    | ✅ Excellent      | ✅ Excellent                  | ✅ Excellent        |
| Flexibility    | ✅ Unopinionated  | 🔸 Slightly more opinionated | ❌ Very opinionated |
| Ecosystem      | ✅ Vast         | 🔸 Small                   | ✅ Vast     |

## Project Structure
Below is the full project structure of Footyleague:
```
PROJ-REACT-FOOTBALL/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── AddToFavorites.js         # Component to add teams to favorites
│   ├── App.css                   # Global CSS for App component
│   ├── App.js                    # Root React component
│   ├── App.test.js               # Unit tests for App
│   ├── AppUtils.js               # Helper functions and API fetch logic
│   ├── Favorites.js              # Component displaying favorite teams
│   ├── football-react.css        # Additional styling
│   ├── Home.js                   # Home page component
│   ├── index.css                 # Global styles
│   ├── index.js                  # React DOM entry point
│   ├── LeagueForm.js             # Component for selecting league and season
│   ├── LeagueTable.js            # Component to display the league standings
│   ├── logo.svg                  # Logo asset
│   ├── reportWebVitals.js        # Performance measurement
│   ├── setupTests.js             # Jest setup
│   ├── Team.js                   # Component to show selected team info
│   └── TeamTooltip.js            # Tooltip component for team hover
│
├── .gitignore                    # Files and folders to be ignored by Git
├── package-lock.json             # Exact versions of dependencies
├── package.json                  # Project metadata and dependencies
└── README.md                     # Project documentation
```

## Contact
### The Developers behind this React project
Please feel free to contact us via **GitHub** or **Gmail**:
### GitHub
**Mustafa Mohammed:** ([Mustafa Mohammed](https://github.com/mustafa-mahamud-mohammed-2004))

**Thomas Iordanescu:** ([Thomas Iordanescu](https://github.com/thomasiordanescu))

### Gmail
**Mustafa Mohammed:** ([Mustafa Mohammed](mustafa.mohammed.business@gmail.com))

**Thomas Iordanescu:** ([Thomas Iordanescu](thomas.iordanescu@gmail.com))


## Resources
- [React Documentation](https://react.dev/)
- [TheSportDB API](https://www.thesportsdb.com/)
- [Create React App Docs](https://create-react-app.dev/docs/getting-started/)

## ⭐️ If you liked this project...
Give us a ⭐️ on GitHub and consider contributing!
Your support means a lot ❤️
