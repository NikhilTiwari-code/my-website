type AccordionEntryProps = {
  title: string
  children: React.ReactNode
}

export default function AccordionEntry({ title, children }: AccordionEntryProps) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-[14px] font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <div className="text-[14px] text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  )
}