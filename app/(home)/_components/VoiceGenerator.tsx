import { ChevronDown, Globe, User } from "lucide-react"

export default function VoiceGenerator() {
  return (
    <div className="bg-gradient-to-br from-cardBgPrimary to-cardBgSecondary flex rounded-xl shadow-lg p-4">
      <div className="w-full space-y-6 p-6 rounded-2xl bg-gradient-to-br from-cardBgPrimary to-cardBgSecondary backdrop-blur-xl">
        {/* Voice Type Dropdown */}
        <textarea
  className="w-full p-4 bg-white/10 hover:bg-white/15 min-h-12 resize-none text-white rounded-lg"
  placeholder="Type here..."
  wrap="soft"
/>



        <div className="flex gap-4">
            {/* Voice Selection Dropdown */}
        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-white">Sebastian</span>
          </div>
          <ChevronDown className="w-5 h-5 text-white" />
        </button>

        {/* Language Dropdown */}
        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white">Generate Audio</span>
          </div>
        </button>
        </div>

        {/* Title and Description */}
        <div className="space-y-2 pt-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Create with the most powerful AI Voice Generator
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Control the tone, emotion, punctuation, dialect and emphasis to convey your message using AI voices any way
            you like.
          </p>
        </div>

        {/* Stars Background Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

