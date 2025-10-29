# Hand Talk Fullstack Challenge

Full-stack application for accessibility analysis of a given URL, with a detailed report and storage of previous submissions.

## Stack

### Frontend

- Vue 3
- Vite
- Typescript
- TailwindCSS
- Axios

### Backend

- Node
- Express
- Typescript
- Axios

## How to run

### Requirements

- Node.js (v18 ou superior)
- npm ou yarn
- Docker

### Cloning the Repo

```bash
git clone https://github.com/lindembergtxr/handtalk-fullstack-challenge.git
cd handtalk-fullstack-challenge
```

### Running the project

```bash
bash setup.sh
```

### Closing the project

```bash
bash shutdown.sh
```

### Running tests

#### Backend

```bash
cd backend
npm run test
```

#### Frontend

```bash
cd frontend
npm run test
```

## Project structure

```
.
├── backend/
│   ├── src/
│   │   ├── app.ts
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   ├── analyze.routes.ts
│   │   │   └── index.ts
│   │   ├── controllers/
│   │   │   └── analyze.ts
│   │   ├── services/
│   │   │   ├── accessibility/
│   │   │   │   ├── img.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── label.ts
│   │   │   │   ├── lang.ts
│   │   │   │   └── title.ts
│   │   │   ├── analyseDocument.ts
│   │   │   ├── report.ts
│   │   │   └── scraper.ts
│   │   ├── adapters/
│   │   │   └── report.ts
│   │   ├── utils/
│   │   │   ├── languageCheck.ts
│   │   │   ├── url.test.ts
│   │   │   ├── url.ts
│   │   │   ├── validateUrlBody.test.ts
│   │   │   └── validateUrlBody.ts
│   │   └── database/
│   │       ├── database.ts
│   │       └── createReport.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── vitest.config.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── SpinnerIcon.vue
│   │   ├── components/
│   │   │   └── ReportViewer.vue
│   │   ├── pages/
│   │   │   ├── Home.vue
│   │   │   └── Report.vue
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   └── analyzeUrl.ts
│   │   ├── adapters/
│   │   │   └── report.ts
│   │   ├── router/
│   │   │   └── index.ts
│   │   ├── main.ts
│   │   ├── style.css
│   │   └── env.d.ts
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── tailwind.config.ts
│   └── .env
│
├── setup.sh
├── shutdown.sh
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Technical decisions

### Architecture

The chosen organization for the project was inspired in the Clean Architecture. Separating concerns and responsabilities into many layers: services, controllers, views, gateways and adapters.
With this, each aspect of the project is contained into its own proper places. Specially, the adapters and gateways make replacing services and integrating with new ones much easier without affecting much of the project.

### Cloud services

For this project, I'd use:

- EC2: for deploying the backend API in a managed virtual server environment.
- S3: to store and serve static assets (e.g., reports, logs, or front-end builds).
- Lambda: to process accessibility reports asynchronously or handle scheduled tasks.
- DocumentDB / MongoDB Atlas: to store analysis reports and metadata.

These services would form a solid base for a production-grade version of this application.

### Production Deployment

#### Frontend

- Build the front-end application and host it on Amazon S3 as a static website.

#### Backend

- Containerize the backend using Docker.
- Deploy the container to Amazon ECS for serverless, scalable container management.
- Store environment variables and secrets securely in AWS Systems Manager (SSM) Parameter Store or Secrets Manager.

#### Database

- Use Amazon DocumentDB or MongoDB Atlas for storing accessibility reports and related data.

#### CI/CD

- Set up a GitHub Actions or AWS CodePipeline workflow to automatically: build, test, push docker to Amazon ECR and deploy to ECS.

## Key features

- URL-based accessibility analysis
- Clean interface
- Modular and strongly typed architecture
- Docker support for consistent environments

## Limitations and pending points

- More tests missing both on front and backends
- Translation tooling for data
- Improve the frontend responsiveness
- Improve the security of the communication between front and back.

## Next steps

- Improve the frontend report display (add semantic grouping, filters, and highlights)
- Create the report history page
- Improve the error feedback messages on the frontend side
- Implement persistent storage for reports
- Add authentication and user session handling
- Configure the project for deployment
- Add front and backend setup to docker-compose
- Add websocket communitcation
