import ButtonLink from "@/app/components/ButtonLink";


export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #090932, #24244b)",
          }}
        ></div>

        {/* Animated Sound Wave Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `moveLine ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {/* Sound Wave SVG Icon */}
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="24"
      height="24"
      fill="currentColor"
      className="text-gray-500" // You can modify this class for styling
    >
      <path
        d="M23.727 16.403v24.134a8.296 8.296 0 0 0-4.35-1.233c-4.612 0-8.353 3.74-8.353 8.349a8.354 8.354 0 0 0 8.353 8.354c4.61 0 8.349-3.739 8.35-8.352V25.151l21.25-6.109V33.33a8.296 8.296 0 0 0-4.35-1.233c-4.614 0-8.353 3.739-8.353 8.348a8.354 8.354 0 0 0 8.353 8.354c4.344 0 7.914-3.325 8.31-7.57h.04V7.993l-29.25 8.41z"
      />
    </svg>
    
          </div> 
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative text-center max-w-4xl px-4 mt-[-280px]">
        <h1 className="text-6xl font-serif font-bold text-white mb-4 leading-tight">
          Let Your Words Sing with the Magic of AI Voice
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          VaaniWave AI lets you create realistic human-like voiceovers in seconds
        </p>

        {/* Centered Button */}
        <div className="flex justify-center items-center">
          <ButtonLink text="Get Started" />
        </div>
      </div>

      {/* Wave Animation */}
      <div className="absolute inset-0 flex justify-center space-x-1 animate-wave mt-[500px]">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-24 bg-gray-700 rounded-full transform origin-bottom"
            style={{ animationDelay: `${i * 0.05}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}



