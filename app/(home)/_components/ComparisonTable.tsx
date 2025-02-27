import vaani from '../../../public/assets/vaani.png';
import play from '../../../public/assets/play.png';
import labs from '../../../public/assets/11labs.png';
import amazon from '../../../public/assets/amazon.png';
import Image from 'next/image';

const ttsPlatforms = [
  {
    name: "Vaaniwave AI",
    logo: vaani,
    voices: "100+",
    minutes: "Unlimited (Self-hosted)",
    pricing: "Self-hosted / Custom",
    speed: "Fast",
    languages: "50+",
    pros: ["Self-hosted", "Realistic voices", "No API limits"],
  },
  {
    name: "ElevenLabs",
    logo: labs,
    voices: "90+",
    minutes: "10,000+ (Paid)",
    pricing: "$5 - $330/month",
    speed: "Fast",
    languages: "30+",
    pros: ["High-quality voices", "Custom voice cloning"],
  },
  {
    name: "Play.ht",
    logo: play,
    voices: "800+",
    minutes: "3000+ (Paid)",
    pricing: "$31 - $99/month",
    speed: "Medium",
    languages: "140+",
    pros: ["Large voice library", "Ultra-realistic AI voices"],
  },
  {
    name: "Amazon Polly",
    logo: amazon,
    voices: "50+",
    minutes: "Pay per usage",
    pricing: "$4 per 1M chars",
    speed: "Medium",
    languages: "30+",
    pros: ["Low cost", "Cloud-based"],
  },
];

export default function ComparisonTable() {
  return (
    <div className=" text-white flex flex-col rounded-lg shadow-lg items-center p-6 mb-24 mt-12">
      <h1 className="text-4xl font-serif mb-6">Compare Vaaniwave AI with Top TTS Platforms</h1>
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="w-full border border-gray-700 text-left">
          <thead>
            <tr className="bg-cardBgSecondary">
              <th className="p-4 border border-gray-700">Platform</th>
              <th className="p-4 border border-gray-700">Voices</th>
              <th className="p-4 border border-gray-700">Minutes</th>
              <th className="p-4 border border-gray-700">Pricing</th>
              <th className="p-4 border border-gray-700">Speed</th>
              <th className="p-4 border border-gray-700">Languages</th>
              <th className="p-4 border border-gray-700">Pros</th>
            </tr>
          </thead>
          <tbody>
            {ttsPlatforms.map((platform, index) => (
              <tr key={index} className="border border-gray-700 bg-cardBgPrimary">
                <td className="p-6 flex items-center gap-3">
                  <Image src={platform.logo} alt={platform.name} className="w-8 h-8 rounded-full" />
                  <span className="font-semibold">{platform.name}</span>
                </td>
                <td className="p-4 border border-gray-700">{platform.voices}</td>
                <td className="p-4 border border-gray-700">{platform.minutes}</td>
                <td className="p-4 border border-gray-700">{platform.pricing}</td>
                <td className="p-4 border border-gray-700">{platform.speed}</td>
                <td className="p-4 border border-gray-700">{platform.languages}</td>
                <td className="p-4 border border-gray-700">{platform.pros.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
