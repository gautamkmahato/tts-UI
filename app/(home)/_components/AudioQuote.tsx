"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";

const mockAvatars = [
  {
    src: "https://picsum.photos/id/1/200/300",
    text: "Hey this is Alex Lets build something extraordinary The future is yours to create Unlock new possibilities with AI",
    user: "Alex Johnson",
  },
  {
    src: "https://picsum.photos/id/3/200/300",
    text: "Unlock new possibilities with AI",
    user: "Sophia Williams",
  },
  {
    src: "https://picsum.photos/id/5/200/300",
    text: "Hey this is Alex Lets build something extraordinary The future is yours to create Unlock new possibilities with AI",
    user: "Michael Smith",
  },
  {
    src: "https://picsum.photos/id/7/200/300",
    text: "Change is the only constant",
    user: "Emily Davis",
  },
  {
    src: "https://picsum.photos/id/9/200/300",
    text: "Dare to dream big",
    user: "Daniel Martinez",
  },
];

export default function AudioQuote() {
  const [index, setIndex] = useState(2); // Center index
  const [isPlaying, setIsPlaying] = useState(false);

  const prevAvatar = () => {
    setIndex((prev) => (prev === 0 ? mockAvatars.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const nextAvatar = () => {
    setIndex((prev) => (prev === mockAvatars.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md bg-cardBgPrimary rounded-xl p-7 shadow-lg space-y-6">
      {/* Avatar Slider */}
      <div className="flex items-center justify-center space-x-4">
        {/* Left Button */}
        <button
          onClick={prevAvatar}
          className="p-2 rounded-full hover:bg-gray-800 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Avatar Images - Showing 5 at a time */}
        <div className="flex items-center space-x-2">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const avatarIndex =
              (index + offset + mockAvatars.length) % mockAvatars.length;
            const isCenter = offset === 0;
            const sizeClass = isCenter
              ? "w-24 h-24"
              : Math.abs(offset) === 1
              ? "w-16 h-16"
              : "w-10 h-10";
            const opacityClass = isCenter ? "opacity-100" : "opacity-50"; // Dim other images

            return (
              <div
                key={avatarIndex}
                className={`relative rounded-full border-2 border-gray-900 overflow-hidden transition-all ${sizeClass} ${opacityClass}`}
              >
                <Image
                  src={mockAvatars[avatarIndex].src}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
                {isCenter && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={nextAvatar}
          className="p-2 rounded-full hover:bg-gray-800 transition"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* Quote Text */}
      <div className="space-y-1 text-center">
        <p className="text-white text-lg font-medium leading-snug">
          {mockAvatars[index].text}
        </p>
        <p className="text-gray-500 text-sm pt-3">
          Spoken by {mockAvatars[index].user}
        </p>
      </div>

      {/* Audio Player Placeholder */}
<div className="relative flex justify-center items-center h-24">
  <div className="flex space-x-1" style={{ transform: "scaleY(-1)" }}>
    {[...Array(40)].map((_, i) => (
      <div
        key={i}
        className={`w-1 h-16 bg-gray-600 rounded-full transform origin-bottom ${
          isPlaying ? "animate-wave-animation" : ""
        }`}
        style={{ animationDelay: `${i * 0.1}s` }}
      ></div>
    ))}
  </div>
</div>

{/* Waveform Animation */}
<style jsx>{`
  @keyframes wave-animation {
    0% {
      height: 16px;
    }
    50% {
      height: 48px;
    }
    100% {
      height: 16px;
    }
  }

  .animate-wave-animation {
    animation: wave-animation 1s infinite ease-in-out alternate;
  }
`}</style>

    </div>
  );
}
