# AI Resume Builder

An AI-powered frontend resume builder that helps users create professional resumes with an easy-to-use interface. Users can enter their details, generate resume content with AI, preview their resume, and download it as a PDF.

## 🚀 Live Demo

**Frontend:** https://accio-resume-builder.vercel.app/

## 📌 Features

* 🤖 AI-powered resume content generation
* 📝 Create and customize professional resumes
* 👤 Manage personal, education, skills, experience, and project details
* 👀 Real-time resume preview
* 📄 Download resumes as PDF
* 🎨 Responsive and modern UI
* ⚡ Fast and responsive application using Vite

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

### AI

* Google Gemini AI API

## 🏗️ Project Architecture

```text
AI-Resume-Builder/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── slices/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
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
 ├──────────────┐
 ▼              ▼
Local State    Gemini AI
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

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
GEMINI_API_KEY=your_gemini_api_key
```

> Never commit your `.env` file or expose API keys and other sensitive credentials in your GitHub repository.

### 4. Start the development server

```bash
npm run dev
```

The application will start using the Vite development server.

## 🔐 Environment Variables

| Variable         | Description           |
| ---------------- | --------------------- |
| `GEMINI_API_KEY` | Google Gemini API key |

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile devices
* 💻 Laptops
* 🖥️ Desktop screens

The UI adapts to different screen sizes while maintaining a consistent resume editing and preview experience.

## 🧠 What I Learned

While developing this project, I worked with:

* Building a React frontend application
* Integrating generative AI into a frontend application
* Google Gemini API integration
* Redux Toolkit state management
* React component architecture
* PDF generation with jsPDF
* HTML-to-canvas conversion
* Responsive UI development
* Environment variable management
* Frontend deployment with Vercel

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
