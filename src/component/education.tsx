import React from 'react'

const Education = () => {
  return (
    <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#0f256e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
        Education
      </h2>
      <div className="space-y-4">
        <div className="border-l-2 border-[#0f256e] pl-4 py-1">
          <h3 className="text-sm font-semibold text-slate-950">Bachelor of Science in Physics</h3>
          <p className="text-xs text-[#0f256e] font-semibold mt-0.5">Veer Kunwar Singh University</p>
          <p className="text-xs text-slate-400 mt-1">2022 - 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Education

