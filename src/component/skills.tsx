import React from 'react'
import DropDown from './dropDown'
import DropDownEntry from './dropDownEntry'

const mySkills = [
  {
    category: "Frontend Development",
    items: [
      "ReactJS", "Next.js", "HTML5", "CSS3", "Tailwind CSS", 
      "JavaScript (ES6+)", "TypeScript", "Redux Toolkit", "React Redux",
      "React Router", "Radix UI", "Shadcn UI", "React Hook Form", 
      "Axios", "React Hot Toast", "Zod"
    ]
  },
  {
    category: "Backend Development",
    items: [
      "Node.js", "Express.js", "Hono", "Bun", "Socket.io", 
      "WebSockets (ws)", "RabbitMQ (amqplib)", "REST APIs", "GraphQL", 
      "Cloudinary Integration", "Swagger API Docs", "JWT Authentication", "bcryptjs"
    ]
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose", 
      "Redis", "Neon DB", "Supabase"
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker", "Vercel", "Render", "Railway", 
      "AWS (S3, EC2)", "GitHub Actions", "Nginx", "Linux Server (DigitalOcean)"
    ]
  },
  {
    category: "Tools & Package Managers",
    items: [
      "Git", "GitHub", "VS Code", "Postman", "Figma", 
      "Jira", "NPM", "PNPM", "Yarn"
    ]
  }
]

const Skills = () => {
  return (
    <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#0f256e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Technical Skills
      </h2>
      <div className="space-y-1">
        {mySkills.map((skillGroup, index) => (
          <DropDown key={index} title={skillGroup.category} defaultOpen={index === 0}>
            <div className="flex flex-wrap gap-1.5 pt-2 pb-1">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/60 rounded px-2.5 py-1 transition-all duration-150"
                >
                  {item}
                </span>
              ))}
            </div>
          </DropDown>
        ))}
      </div>
    </div>
  )
}

export default Skills

