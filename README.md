# CareFlow Lite Frontend

CareFlow Lite is a demo telehealth-style application demonstrating a complete end-to-end workflow for managing patient consultations across multiple clinics.

CareFlow Lite Frontend is the clinician-facing web interface for the CareFlow Lite platform.  
It showcases secure mock authentication, GraphQL queries and mutations, and a modern, responsive UI built with React, TypeScript, and Tailwind CSS.  
The application is designed to provide a realistic example of a clinician-facing system, enabling users to view and filter consultations, create new consultations, update statuses, and record notes - with a strong focus on polished, intuitive interactions.

This frontend leverages React and TypeScript, Apollo Client for GraphQL communication, Redux Toolkit for state management, and Tailwind CSS for styling.

---

## Features
- **Secure Mock Login**: Authenticates via backend login mutation and stores JWT locally.
- **GraphQL Integration**: Queries and mutations for consultations, patients, clinics, and notes via Apollo Client.
- **CRUD Operations**: Create, read, update, delete consultations; update status; add notes.
- **Responsive UI**: Tailwind CSS v3 for mobile-friendly and accessible design.
- **Protected Routes**: Guards pages and redirects unauthenticated users to the login screen.

---

## Tech Stack
**Frontend**
- React 19
- TypeScript
- Apollo Client (GraphQL)
- Redux Toolkit
- React Router
- Tailwind CSS

---

## Environment Variables
Create a `.env` file in the project root:

```env
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
