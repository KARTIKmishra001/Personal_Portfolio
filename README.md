# 👨‍💻 Kartik Mishra — Personal Portfolio

<p align="center">
  <a href="https://personal-portfolio-pi-rust.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-00C7B7?style=for-the-badge" alt="Live Demo"/>
  </a>
  <a href="https://github.com/KARTIKmishra001/Personal_Portfolio">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
</p>

<p align="center">
  <strong>A modern, responsive developer portfolio showcasing my skills, projects, experience, education, and open-source journey.</strong>
</p>

<p align="center">
  <a href="https://personal-portfolio-pi-rust.vercel.app/">Live Website</a>
  •
  <a href="https://github.com/KARTIKmishra001/Personal_Portfolio">Source Code</a>
  •
  <a href="https://github.com/KARTIKmishra001">GitHub Profile</a>
</p>

---

## 🌐 Live Demo

### 🚀 [Visit My Portfolio →](https://personal-portfolio-pi-rust.vercel.app/)

> Explore my complete portfolio including projects, technical skills, education, experience, achievements, and contact information.

---

## ✨ About The Project

This repository contains my personal developer portfolio built to provide a central place for recruiters, hiring managers, collaborators, and developers to learn more about me and my work.

The portfolio focuses on:

* 💼 Professional experience
* 🚀 Software development projects
* 🧑‍💻 Technical skills
* 🎓 Education
* 🌎 Open-source contributions
* 📊 Development journey
* 📬 Contact information

The application is designed to be responsive and accessible across desktop and mobile devices.

---

## 🖥️ Portfolio Highlights

| Section            | Description                                    |
| ------------------ | ---------------------------------------------- |
| 🏠 **Home**        | Introduction and developer profile             |
| 👨‍💻 **About**    | Background, interests, and development journey |
| 💼 **Experience**  | Professional and technical experience          |
| 🚀 **Projects**    | Selected projects and development work         |
| 🎓 **Education**   | Academic background                            |
| 🌎 **Open Source** | Open-source projects and organizations         |
| 📬 **Contact**     | Contact and social information                 |

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://img.shields.io/badge/React-16.x-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

### UI & Styling

<p>
  <img src="https://img.shields.io/badge/Bootstrap-4.4.1-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/Radium-React-61DAFB?style=for-the-badge"/>
</p>

### Libraries & Tools

<p>
  <img src="https://img.shields.io/badge/React_Router-v5-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
  <img src="https://img.shields.io/badge/Chart.js-2.9.3-FF6384?style=for-the-badge&logo=chart.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/GraphQL-API-E10098?style=for-the-badge&logo=graphql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Apollo-Client-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white"/>
</p>

### Deployment & Development

<p>
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-GitHub-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/npm-Package_Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
</p>

---

## 📁 Project Structure

```text
Personal_Portfolio/
│
├── .github/
│   └── workflows/
│
├── images/
│   └── portfolio assets
│
├── public/
│   └── static public assets
│
├── src/
│   ├── components/
│   │
│   ├── pages/
│   │   ├── education/
│   │   ├── errors/
│   │   ├── experience/
│   │   ├── home/
│   │   ├── projects/
│   │   └── splash/
│   │
│   ├── shared/
│   │   └── opensource/
│   │
│   ├── portfolio.js
│   ├── serviceWorker.js
│   └── theme.js
│
├── .gitignore
├── Dockerfile
├── docker-compose.yaml
├── package.json
├── package-lock.json
├── README.md
└── env.example
```

---

## ⚡ Getting Started

Follow these steps to run the portfolio locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/KARTIKmishra001/Personal_Portfolio.git
```

### 2️⃣ Navigate into the project

```bash
cd Personal_Portfolio
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
build/
```

---

## 🐳 Docker Support

This project also contains Docker configuration for containerized development/deployment.

### Build the Docker image

```bash
docker build -t personal-portfolio .
```

### Run the container

```bash
docker run -p 3000:3000 personal-portfolio
```

> Docker is optional for the Vercel deployment. The portfolio is currently deployed directly through Vercel.

---

## 🚀 Deployment

The live portfolio is deployed using **Vercel**.

### Deployment Flow

```text
Local Development
       │
       ▼
     Git
       │
       ▼
    GitHub
       │
       ▼
    Vercel
       │
       ▼
🌐 Live Portfolio
```

### Live Deployment

🔗 **https://personal-portfolio-pi-rust.vercel.app/**

---

## 🔧 Available Scripts

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `npm start`      | Runs the development server                         |
| `npm run build`  | Creates a production build                          |
| `npm test`       | Runs the test suite                                 |
| `npm run eject`  | Ejects Create React App configuration               |
| `npm run deploy` | Builds and deploys using GitHub Pages configuration |

---

## 📱 Responsive Design

The portfolio is designed to work across multiple screen sizes:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

---

## 🎯 Goals of This Portfolio

This project was created to:

* Build a professional online developer presence
* Showcase software engineering projects
* Demonstrate frontend development skills
* Provide recruiters with an easy way to explore my work
* Maintain a central collection of professional information
* Experiment with modern React-based development

---

## 🔮 Future Improvements

Some improvements planned for future versions:

* [ ] Improve accessibility and semantic HTML
* [ ] Add more project case studies
* [ ] Add project filtering/search
* [ ] Improve Lighthouse performance scores
* [ ] Add automated testing
* [ ] Add more interactive UI components
* [ ] Improve SEO and metadata
* [ ] Add a custom domain
* [ ] Add CI/CD improvements

---

## 🤝 Contributing

This is primarily a personal portfolio project, but suggestions and feedback are welcome.

If you find a bug or have an improvement suggestion:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 📬 Connect With Me

<p align="center">

<a href="https://github.com/KARTIKmishra001">
<img src="https://img.shields.io/badge/GitHub-KARTIKmishra001-181717?style=for-the-badge&logo=github"/>
</a>

<a href="https://personal-portfolio-pi-rust.vercel.app/">
<img src="https://img.shields.io/badge/Portfolio-Live_Demo-00C7B7?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

</p>

---

## ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

It helps support the project and encourages further development.

---

<p align="center">
  <strong>Built with ❤️ by Kartik Mishra</strong>
</p>

<p align="center">
  <sub>© 2026 Kartik Mishra. All rights reserved.</sub>
</p>
