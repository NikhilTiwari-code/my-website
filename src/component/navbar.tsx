import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0f256e] h-16 flex items-center 
                    justify-between px-6 md:px-9 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center bg-white/10 w-8 h-8 rounded-lg border border-white/10">
          <span className="text-[#2ecc71] font-bold text-lg">N</span>
        </div>
        <span className="text-white text-lg font-bold tracking-tight">
          Nikhil <span className="text-[#2ecc71] font-medium">Tiwari</span>
        </span>
        <div className="w-px h-4.5 bg-white/25 mx-2" />
        <span className="text-[#9ab8d8] text-[14px] font-medium hidden sm:inline">FullStack Developer</span>
      </div>

      {/* Right: CTA */}
      <Link
        href="https://wa.me/9708413995?text=Hi%20Nikhil%2C%20I%20wanted%20to%20connect%20with%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2ecc71] hover:bg-[#25b562] text-white text-xs sm:text-sm 
                   font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
      >
        Contact Me
      </Link>
    </nav>
  )
}