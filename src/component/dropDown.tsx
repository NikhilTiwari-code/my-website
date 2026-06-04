'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type DropDownProps = {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export default function DropDown({
  title,
  defaultOpen = false,
  children,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200">

      {/* Header — click karo to toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 
                   border-t border-gray-200 cursor-pointer group"
      >
        <span className="text-[18px] font-semibold text-gray-900">
          {title}
        </span>

        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform duration-300
                      ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Body — smooth open/close */}
      <div
        className={`overflow-hidden transition-all duration-350 ease-in-out
                    ${isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'}`}
      >
        {children}
      </div>

    </div>
  )
}