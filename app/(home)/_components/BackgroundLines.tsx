import { ReactNode } from "react";

interface BackgroundLinesProps {
  children?: ReactNode;
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-[400px] w-full overflow-hidden ${className}`}>
      {/* Animated wave lines */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"
            style={{
              top: `${20 + i * 12}%`,
              animation: `waveAnimation ${2 + i * 0.2}s ease-in-out infinite`,
              opacity: 0.1 + i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      {children}

      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            transform: translateX(-100%) scaleY(1);
          }
          50% {
            transform: translateX(0%) scaleY(1.2);
          }
          100% {
            transform: translateX(100%) scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundLines;
