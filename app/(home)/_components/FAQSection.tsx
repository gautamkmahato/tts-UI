'use client'


import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Vaaniwave AI?",
    answer: "Vaaniwave AI is a powerful self-hosted AI text-to-speech (TTS) platform that generates realistic AI voices with complete customization.",
  },
  {
    question: "How does Vaaniwave AI compare to ElevenLabs?",
    answer: "Unlike ElevenLabs, Vaaniwave AI allows self-hosting, offering unlimited usage without monthly API limits or additional fees.",
  },
  {
    question: "What languages does Vaaniwave AI support?",
    answer: "Vaaniwave AI supports over 50 languages, enabling users to create voices in multiple dialects and accents.",
  },
  {
    question: "Can I use Vaaniwave AI for commercial projects?",
    answer: "Yes! Vaaniwave AI can be used for commercial applications, including voiceovers, audiobook narration, and AI chatbots.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Vaaniwave AI is self-hosted, so you can install and test it without restrictions. No recurring subscription fees apply!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white flex flex-col items-center p-6"
    
    >
      <h1 className="text-4xl font-serif mb-6 text-center">Frequently Asked Questions</h1>
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-gray-500 bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-xl p-4">
            <button
              className="flex justify-between items-center w-full text-left text-white text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-300 mt-3 transition-opacity duration-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
