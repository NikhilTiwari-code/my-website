import "./globals.css";
import ProfileCard from "@/src/component/profileCard"
import Portfolio from "@/src/component/portfolio";
import Education from "@/src/component/education";
import Skills from "@/src/component/skills";
import WorkExperience from "@/src/component/workExperience";
import { Clock, Globe, Award, Shield } from "lucide-react";

const Nikhil = {
  name: "Nikhil Tiwari",
  role: "FullStack Developer",
  location: "Varanasi, India",
  isAvailable: true,
  expertise: [
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
    "SaaS & API Development",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "WebSockets & Real-Time",
    "Vercel AI SDK",
    "OpenAI Integration",
    "Landing Pages & Websites",
    "TypeScript"
  ],
  bio: `Full Stack Developer with 1+ years of hands-on experience shipping web applications end-to-end — comfortable across the entire stack, from designing REST APIs and database schemas on the backend to building responsive, component-driven UIs on the frontend. I prioritize writing clean, modular code that stays readable, maintainable, and easy to scale. My GitHub reflects how I think: structured projects, consistent commits, and real problems solved.`
}

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col gap-8">
        
        {/* Profile Card (Full Width Banner) */}
        <div className="w-full">
          <ProfileCard  
            name={Nikhil.name}
            role={Nikhil.role}
            location={Nikhil.location}
            isAvailable={Nikhil.isAvailable}
            expertise={Nikhil.expertise}
            bio={Nikhil.bio}
          />
        </div>

        {/* 2-Column Responsive Layout Below */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: Sidebar Column (1/3 Width) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Quick Status Info widget (Toptal Style) */}
            <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
                <Shield size={16} className="text-[#0f256e]" />
                Professional Details
              </h3>
              
              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-400">Preferred Role</span>
                  <span className="font-bold text-slate-800">FullStack Developer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-400">Languages</span>
                  <span className="font-bold text-slate-800">English (Fluent), Hindi (Native)</span>
                </div>


              </div>
            </div>

            {/* Education section */}
            <Education />
            
            {/* Skills section */}
            <Skills />
            
          </div>

          {/* RIGHT: Main Content Column (2/3 Width) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Detailed Work Experience Timeline */}
            <WorkExperience />

            {/* Featured Portfolio Projects */}
            <Portfolio />
            
          </div>

        </div>
      </div>
    </main>
  )
}


