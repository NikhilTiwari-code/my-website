import React from 'react'
import Link from 'next/link'

type  CardProps = {
    title?: string;
    image?: string;
    description?: string;
    linkUrl?: string;
}

const Card = ({ title, image, description, linkUrl }: CardProps) => {
  // सिर्फ पहला नाम (First Name) निकालने के लिए ताकि "Danielle" जैसा दिखे

  return (
    <div className="max-w-[380px] w-full flex flex-col font-sans mb-8 shadow-sm">
        {/* Image Container - Background and Aspect Ratio */}
        <div className="w-full h-[450px] bg-[#d7dce2] relative overflow-hidden">
            {image && (
                <img 
                    src={image} 
                    alt={title} 
                    // mix-blend-screen हटा दिया है क्योंकि आपकी इमेज अब वैसी ही है जैसी चाहिए।
                    // scale-105 और translate-y-2 से इमेज थोड़ी ज़ूम होगी और खिसकेगी ताकि पुराना लोगो छिप जाए। 
                    className="w-full h-full object-cover object-top scale-105 translate-y-[2%]"
                />
            )}
            
            {/* Bottom-left White Triangle Cutout (with Blue Logo) */}
            <div 
                className="absolute bottom-0 left-0 w-16 h-16 bg-white flex items-end justify-start p-2"
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
            >
                <div className="text-blue-700 font-bold text-xl leading-none flex" style={{ transform: 'rotate(-45deg) translate(-2px, -8px)' }}>
                    <span>/</span>
                    <span className="font-light">|</span>
                </div>
            </div>
        </div>

        {/* Footer Bar (White bar with Green Left Border) */}
        <div className="border-l-[6px] border-[#0bd27c] bg-white flex items-center justify-between py-4 px-5">
            <span className="text-gray-600 text-[15px] mr-2">
                I am <span className="text-[#0bd27c] font-medium">available</span> for hire
            </span>
            
            <Link 
                href={linkUrl || "#"} 
                className="bg-[#0bd27c] hover:bg-[#0aa160] text-white text-[15px] font-semibold py-2 px-4 rounded-sm transition-colors duration-200 shadow-sm whitespace-nowrap"
            >
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default Card
