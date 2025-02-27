import type React from "react"
import { Clock, Library, Heart } from "lucide-react"

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1a1b35] transition-colors">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function FeatureList() {
  const features = [
    {
      icon: Clock,
      title: "Speed Up Production",
      description: "Meet revenue targets fast for conversational experiences, IVR, chatbots, and other applications.",
    },
    {
      icon: Library,
      title: "Expansive voice library",
      description:
        "Our expansive library is a trove of voices suited for any project, from immersive creative experiences to corporate modules.",
    },
    {
      icon: Heart,
      title: "Capture Diverse Narratives Flawlessly",
      description:
        "Not just getting a voice, you're finding the one that aligns with your content's purpose and leaves a lasting impact.",
    },
  ]

  return (
    <div className="bg-cardBgPrimary rounded-lg shadow-lg flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-2">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  )
}

