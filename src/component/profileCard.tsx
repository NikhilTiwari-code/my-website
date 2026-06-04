import { MapPin, Briefcase } from 'lucide-react'

type ProfileCardProps = {
  name: string
  role: string
  location: string
  isAvailable: boolean
  expertise: string[]
  bio: string
}

export default function ProfileCard({
  name,
  role,
  location,
  isAvailable,
  expertise,
  bio,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col md:flex-row border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* ── LEFT: Big Portrait Card ── */}
      <div className="w-full md:w-[400px] flex-shrink-0 flex flex-col border-r border-slate-100 bg-white">
        {/* Image Container */}
        <div className="w-full h-[400px] md:h-[450px] bg-[#d7dce2] relative overflow-hidden">
          <img
            src="/profile image.png"
            alt={name}
            className="w-full h-full object-cover object-top scale-110 -translate-y-3"
          />
        </div>

        {/* Footer Bar (White bar with Green Left Border) */}
        <div className="border-l-[6px] border-[#0bd27c] bg-white flex items-center justify-between py-4 px-5 border-t border-slate-100/80">
          <span className="text-slate-600 text-[14px]">
            I am <span className="text-[#0bd27c] font-semibold">available</span> for hire
          </span>
          <a
            href="mailto:91970tiwarinikhil@gmail.com"
            className="bg-[#0bd27c] hover:bg-[#0aa160] text-white text-[13.5px] font-bold py-2 px-4 rounded-sm transition-colors duration-200 shadow-sm whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* ── RIGHT: Info ── */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        <div>
          {/* Header row: Verified Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold text-[#0f256e] tracking-widest uppercase bg-[#edf4fc] px-2.5 py-0.5 rounded border border-[#c2d9f0]">
              Verified Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            {name}
          </h1>

          {/* Title & Location */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1.5 font-medium">
              <Briefcase size={15} className="text-slate-400" />
              {role}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-slate-400" />
              {location}
            </span>
          </div>

          {/* Expertise tags */}
          <div className="mb-4">
            <p className="text-[10.5px] font-bold text-slate-400 tracking-wider uppercase mb-2">
              Primary Expertise
            </p>
            <div className="flex flex-wrap gap-1.5">
              {expertise.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[#0f256e] font-semibold bg-[#edf4fc] border 
                             border-[#c2d9f0] rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-100 my-4" />

        {/* Short Bio */}
        <div>
          <p className="text-[10.5px] font-bold text-slate-400 tracking-wider uppercase mb-1.5">
            Biography
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}
