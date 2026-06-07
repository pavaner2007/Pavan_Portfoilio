# Pavan E R - Premium Portfolio Website

A modern recruiter-focused personal portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Icons, and Vite.

## Included Resume Details

- Full name, phone, email, LinkedIn, GitHub
- Objective and professional summary
- Education with scores and coursework
- Skills grouped by category
- Projects: Study Mate, AutoQA Agent, Medical Chatbot, Credit Card Fraud Detection
- Hackathon achievement
- Certifications and coding profiles
- Resume download PDF

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

## Customize

Edit personal details, projects, skills, education, and links in:

```bash
src/data/portfolio.ts
```

Replace the professional photo placeholder in `src/components/Hero.tsx` with your actual image when available. Put the image inside `public/` and reference it as `/your-photo-name.jpg`.

## Deployment

This project can be deployed on Vercel, Netlify, Render, or GitHub Pages. For Vercel/Netlify, import the repository and use:

- Build command: `npm run build`
- Output directory: `dist`
