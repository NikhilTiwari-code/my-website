import Card from '@/src/component/card'           // tera existing Card
import ProfileCard from '@/src/component/profileCard'

type ProfileSectionProps = {
  // Card ke liye
  title: string
  image?: string
  description: string
  linkUrl?: string
  // ProfileCard ke liye
  role: string
  location: string
  memberSince: string
  expertise: string[]
  bio: string
}

export default function ProfileSection({
  title, image, description, linkUrl,
  role, location, memberSince, expertise, bio
}: ProfileSectionProps) {
  return (
    <div className="flex border border-gray-200 rounded-xl overflow-hidden 
                    bg-white shadow-sm">
      
      {/* Tera existing Card — bilkul same, sirf mb-8 hata diya */}
      <div className="flex-shrink-0">
        <Card
          title={title}
          image={image}
          description={description}
          linkUrl={linkUrl}
        />
      </div>

      {/* ProfileCard — right side */}
      <ProfileCard
        name={title}
        role={role}
        location={location}
        expertise={expertise}
        bio={bio}
        isAvailable={true}
      />

    </div>
  )
}