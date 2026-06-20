<div align="center">

<img src="src/assets/post-feed-logo.jpg" alt="Post / Feed. Logo" width="220" />

### API Consumer App · Sprint 3 · IT Academy Barcelona

Explore, search and paginate posts from a public API using both Fetch API and Axios.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)

</div>

---

## Preview

### 📱 Mobile

![Hero mobile](src/assets/preview-mobile.jpg)

### 🖥️ Desktop

![Hero desktop](src/assets/preview-desk.jpg)

---

## Core features

- Browse posts fetched from a live API
- Real-time search by keyword
- Toggle between **Fetch API** and **Axios** as the HTTP request method
- Pagination with active page indicator
- Loading, error and empty state management
- Responsive design (mobile first)

---

## Tech stack

| Category        | Technology                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Language        | JavaScript (Vanilla ES6+)                                                                                         |
| Styles          | Native CSS (Custom Properties, Grid, Flexbox)                                                                     |
| HTTP Client     | [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) + [Axios](https://axios-http.com) via CDN |
| Mock API        | [JSONPlaceholder](https://jsonplaceholder.typicode.com)                                                           |
| Images          | [Picsum Photos](https://picsum.photos)                                                                            |
| Version Control | Git + GitHub (Git Flow)                                                                                           |

---

## Getting started

### Prerequisites

- A code editor (VS Code recommended)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/gemmaadev/api-consumer-app.git

# 2. Navigate to the project directory
cd api-consumer-app
```

Then open `index.html` with Live Server (right click → **Open with Live Server**).

The app will be available at `http://127.0.0.1:5500`

---

## Project structure

```
api-consumer-app/
├── index.html
└── src/
    ├── scripts/
    │   ├── main.js          → constants, DOM references, event listener, fetchData()
    │   └── render.js        → UI rendering and DOM state management
    ├── services/
    │   ├── fetchService.js  → HTTP requests with Fetch API
    │   └── axiosService.js  → HTTP requests with Axios
    ├── styles/
    │   ├── variables.css    → custom properties (colors, typography, radii)
    │   ├── global.css       → reset and base styles
    │   └── styles.css       → component-specific styles
    └── assets/
        ├── post-feed-logo.jpg
        ├── hero-animation.svg
        └── icon-search.svg
```

---

## Architecture decision: globals vs ES Modules

The code is split into files following the single responsibility principle. ES Modules were considered but not used because `render.js` needs to call `fetchData()` from `main.js` and vice versa — a circular dependency that would require passing functions as parameters through the entire call chain, adding unnecessary complexity for a project of this size.

In a real-world project with Vite or React, this would be solved with a centralised data store. For this academic exercise, global variables `currentPage` and `fetchData` are the most pragmatic and readable solution.

---

## Author

**Gemma Maeso** · [@gemmaadev](https://github.com/gemmaadev)

Project developed as part of the **IT Academy** program by Barcelona Activa · Sprint 3 · Task 01
