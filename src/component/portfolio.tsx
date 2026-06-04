import React from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

const myPortfolio = [
  {
    id: 1,
    name: "SwiftChat - Real-Time Messaging Platform",
    description: "A high-performance chat application featuring instant message delivery, multi-channel queuing, and secure user sessions. Built with a decoupled frontend/backend structure to handle robust real-time communication.",
    techStack: ["Next.js 16", "React 19", "Redux Toolkit", "Node.js", "Express", "WebSockets", "RabbitMQ", "PostgreSQL", "Prisma", "Docker"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  },
  {
    id: 2,
    name: "Content Management Platform",
    description: "A fast, SEO-optimized publishing application designed for high-traffic platforms. Implemented server-side rendering, dynamic route segments, and Prisma ORM query optimizations.",
    techStack: ["React", "Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  },
  {
    id: 3,
    name: "E-Commerce Management Dashboard",
    description: "A comprehensive admin tool for store operations, showing real-time sales tracking, stock levels, and user registration analytics through clean visualizations.",
    techStack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com"
  }
]

export default function Portfolio() {
  return (
    <section className="bg-white p-6 md:p-8 border border-slate-200 rounded-xl shadow-sm">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0f256e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Featured Portfolio Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-8">
          {myPortfolio.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col lg:flex-row gap-6 items-start border-b border-slate-100 pb-8 last:border-0 last:pb-0 group"
            >
              {/* Left: Image Container */}
              <div className="w-full lg:w-64 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200/80 aspect-[16/10] bg-slate-50 relative">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Right: Content details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-[#0f256e] group-hover:text-[#1d4ed8] transition-colors duration-200">
                    {project.name}
                  </h3>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                      title="View GitHub Repository"
                    >
                      <FaGithub size={16} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                  {project.description}
                </p>
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

           