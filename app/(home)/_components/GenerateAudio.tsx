'use client'

import React, { useState, forwardRef } from 'react';
import { Mic } from 'lucide-react';

// Card Components
const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative rounded-lg bg-transparent ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = 'Card';

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

// Label Component
const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className = '', children, ...props }, ref) => (
    <label
      ref={ref}
      className={`text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </label>
  )
);
Label.displayName = 'Label';

// Select Components
interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ value, onChange, placeholder, children, className = '', ...props }, ref) => (
    <select
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`
        w-full px-4 py-2 
        bg-[#33345f] text-white/90
        rounded-md 
        appearance-none
        cursor-pointer
        transition-colors duration-200
        hover:bg-[#3b3c6b]
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        ${className}
      `}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  )
);
Select.displayName = 'Select';

const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <option value={value} className="text-white/90 bg-[#33345f]">
    {children}
  </option>
);

// Textarea Component
const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`
        w-full min-h-[120px] 
        px-4 py-2 
        bg-[#33345f] text-white/90
        rounded-md 
        resize-none
        transition-all duration-200
        placeholder:text-white/50
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        ${className}
      `}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

// Star Component
const Star = () => (
  <div 
    className="absolute w-px h-px bg-white rounded-full animate-twinkle"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }}
  />
);

// Main Application Component
const TextToSpeechApp = () => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');

  const voices = [
    { 
      id: 'agent1', 
      name: 'Agent 1', 
      image: '/api/placeholder/40/40'
    },
    { 
      id: 'agent2', 
      name: 'Agent 2', 
      image: '/api/placeholder/40/40'
    },
    { 
      id: 'agent3', 
      name: 'Agent 3', 
      image: '/api/placeholder/40/40'
    },
  ];

  // Generate 50 stars
  const stars = Array.from({ length: 50 }, (_, i) => <Star key={i} />);

  return (
    <div className="relative min-h-screen w-full bg-[#1e1d3f] p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1d3f] via-[#222144] to-[#1e1d3f]" />
      {stars}
      
      <Card className="relative w-full max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg backdrop-blur-sm" />
        <CardContent className="relative space-y-6">
          <div className="space-y-2">
            <Label htmlFor="text-input" className="text-white/90">
              Text to Convert
            </Label>
            <Textarea
              id="text-input"
              placeholder="Type or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="voice-select" className="text-white/90">
              Voice Settings
            </Label>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Select
                  
                  value={selectedVoice}
                  onChange={setSelectedVoice}
                  placeholder="Choose a voice"
                >
                  {voices.map((voice) => (
                    <SelectItem key={voice.id} value={voice.id}>
                      {voice.name}
                    </SelectItem>
                  ))}
                </Select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg 
                    className="w-4 h-4 text-white/70" 
                    fill="none" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <button
                type="button"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md font-medium transition-all duration-200 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap"
                disabled={!text || !selectedVoice}
              >
                <Mic className="w-4 h-4" />
                <span>Convert</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


export default TextToSpeechApp;