import React from 'react'
import { Briefcase, Calendar, Award } from 'lucide-react'

const experiences = [
  {
    role: "Full-Stack Developer (SwiftChat Project)",
    company: "Self-Employed / Independent Project",
    duration: "Jan 2024 - Present",
    description: "Designed, engineered, and deployed SwiftChat, a high-performance, real-time enterprise messaging application utilizing microservices architecture.",
    bullets: [
      "Built a highly responsive frontend using Next.js 16 (App Router), React 19, Redux Toolkit, and Tailwind CSS for smooth real-time UI state synchronization.",
      "Architected a scalable Node.js/Express.js backend implementing raw WebSockets (ws) and RabbitMQ (amqplib) to handle asynchronous chat queuing and reliable message delivery.",
      "Integrated Prisma ORM with PostgreSQL (Supabase/Neon DB) for robust data relational schemas, writing highly optimized queries for chat logs and user profiles.",
      "Containerized both frontend and backend using Docker & Docker Compose, configured Nginx as a reverse proxy, and deployed to DigitalOcean Droplets using automated shell scripts."
    ],
    tech: ["Next.js", "React 19", "Redux Toolkit", "Node.js", "Express", "WebSockets", "RabbitMQ", "PostgreSQL", "Prisma", "Docker", "Nginx", "Linux"]
  },
  {
    role: "Full-Stack Web & AI Developer",
    company: "Freelance / Self-Employed",
    duration: "Jun 2023 - Dec 2023",
    description: "Developed custom SaaS platforms, modern landing pages, and AI-powered web applications for global clients.",
    bullets: [
      "Integrated Vercel AI SDK and OpenAI APIs to build intelligent chat interfaces, automation agents, and context-aware data generation systems.",
      "Crafted responsive and animated user interfaces with React, Next.js, Shadcn UI, and Tailwind CSS to increase client user engagement by 25%.",
      "Designed and implemented RESTful APIs using Express.js and Hono, and integrated MongoDB (using Mongoose) and Supabase for real-time cloud data storage.",
      "Utilized Git/GitHub Actions for continuous integration and deployed serverless APIs using Vercel, Railway, and Render."
    ],
    tech: ["Next.js", "ReactJS", "TypeScript", "Vercel AI SDK", "OpenAI API", "Tailwind CSS", "Shadcn UI", "MongoDB", "Mongoose", "Supabase", "Git", "Vercel"]
  }
]

const WorkExperience = () => {
  return (
    <section className="bg-white p-6 md:p-8 border border-slate-200 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#0f256e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Work Experience
      </h2>

      <div className="relative pl-6 border-l-2 border-slate-100 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Dot */}
            <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-[#0f256e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2ecc71]" />
            </span>

             {/* Content block */}
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-slate-950">
                  {exp.role}
                </h3>
                <span className="text-xs md:text-sm font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded border border-slate-100 flex items-center gap-1 w-fit">
                  <Calendar size={12} />
                  {exp.duration}
                </span>
              </div>

              <div className="text-sm font-semibold text-[#0f256e] flex items-center gap-1">
                <Award size={13} />
                {exp.company}
              </div>

              <p className="text-[15px] text-slate-600 leading-relaxed font-normal mt-1">
                {exp.description}
              </p>

              {/* Bullets */}
              <ul className="list-disc pl-4 text-sm text-slate-500 space-y-1.5 mt-2 font-normal">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1 mt-4 pt-1">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-semibold text-[#0f256e]/80 bg-[#edf4fc]/60 border border-[#c2d9f0]/40 rounded px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
