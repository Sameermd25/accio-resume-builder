# AI Resume Builder

An AI-powered resume builder that helps users create professional, ATS-friendly resumes with an easy-to-use interface. Users can enter their details, generate and customize resume content, preview their resume, and download it as a PDF.

## 🚀 Live Demo

https://accio-resume-builder.vercel.app/

## 📌 Features

* 🤖 AI-powered resume content generation
* 📝 Create and customize professional resumes
* 👤 Manage personal, education, skills, experience, and project details
* 👀 Real-time resume preview
* 📄 Download resumes as PDF
* 🎨 Responsive and modern UI
* 🔐 User authentication and authorization
* 💾 Save and manage resume data
* ⚡ Fast and responsive application using Vite
* 🗃️ MongoDB database for persistent data storage

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router
* Tailwind CSS
* Vite
* Axios
* jsPDF
* html2canvas

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Cookie Parser
* CORS
* dotenv

### AI

* Google Gemini AI API

## 🏗️ Project Architecture

```text
AI-Resume-Builder/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── slices/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🔄 Application Flow

```text
User
 │
 ▼
React Frontend
 │
 ├── Resume Details
 ├── AI Content Generation
 └── Resume Preview
 │
 ▼
Express.js API
 │
 ├── Authentication
 ├── Resume Management
 └── AI Integration
 │
 ├──────────────┐
 ▼              ▼
MongoDB       Gemini AI
 │
 ▼
Resume Data
 │
 ▼
PDF Generation
 │
 ▼
Download Resume
```

## 🤖 AI Resume Generation

The application integrates **Google Gemini AI** to assist users in generating professional resume content.

AI can help improve or generate sections such as:

* Professional summary
* Career objective
* Skills descriptions
* Project descriptions
* Work experience descriptions

This helps users create clear and professional content while reducing the time required to write resume sections manually.

## 🔑 Authentication

The application uses **JWT-based authentication**.

Authentication flow:

1. User creates an account.
2. Password is securely hashed using `bcryptjs`.
3. User signs in.
4. Server generates a JWT.
5. JWT is stored using cookies.
6. Protected routes verify the authenticated user before providing access to resume data.

## 📄 PDF Generation

The application allows users to download their completed resume as a PDF.

The frontend uses:

* `html2canvas` to capture the resume preview.
* `jsPDF` to convert the captured content into a downloadable PDF.

```text
Resume Editor
      │
      ▼
Resume Preview
      │
      ▼
html2canvas
      │
      ▼
Canvas Image
      │
      ▼
jsPDF
      │
      ▼
PDF Download
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sameermd25/accio-resume-builder.git

cd accio-resume-builder
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend directory.

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

> Never commit your `.env` file or expose API keys and other sensitive credentials in your GitHub repository.

### 5. Start the backend

```bash
cd backend
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will start using the Vite development server.

## 🔐 Environment Variables

| Variable         | Description                        |
| ---------------- | ---------------------------------- |
| `PORT`           | Backend server port                |
| `MONGO_URI`      | MongoDB connection string          |
| `JWT_SECRET`     | Secret used for JWT authentication |
| `GEMINI_API_KEY` | Google Gemini API key              |

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile devices
* 💻 Laptops
* 🖥️ Desktop screens

The UI adapts to different screen sizes while maintaining a consistent resume editing and preview experience.

## 🧠 What I Learned

While developing this project, I worked with:

* Building a full-stack MERN application
* Integrating generative AI into a web application
* Google Gemini API integration
* JWT authentication
* Password hashing
* Redux Toolkit state management
* REST API development
* MongoDB and Mongoose
* React component architecture
* PDF generation with jsPDF
* HTML-to-canvas conversion
* Responsive UI development
* Environment variable management
* Frontend and backend deployment

## 🔮 Future Improvements

* 🎨 Multiple resume templates
* 🤖 AI-powered resume scoring
* 📊 ATS compatibility analysis
* ✨ AI-powered resume improvement suggestions
* 📋 More customizable resume sections
* 📥 Import resume from existing PDF
* 🌐 Share resumes through a public link
* 💼 Job-specific resume optimization

## 👨‍💻 Author

**Md Sameer**

IT Engineer | MERN Stack Developer

* GitHub: https://github.com/Sameermd25/

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.
