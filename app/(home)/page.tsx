import Header from "./_components/Header";
import Hero from "./_components/Hero";
import VoiceGenerator from "./_components/VoiceGenerator";
import LanguageSupport from "./_components/LanguageSupport";
import AudioQuote from "./_components/AudioQuote";
import TextCorrection from "./_components/TextCorrection";
import FeatureList from "./_components/FeatureList";
import Link from "next/link";
import Pricing from "./_components/Pricing";
import ComparisonTable from "./_components/ComparisonTable";
import Footer from "./_components/Footer";
import FAQSection from "./_components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <div
          className="mt-[-40px] bg-gradient-to-b from-[#24244b] to-[#090932]"
        >
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-6xl  p-6 rounded-2xl">
            {/* Two-column grid */}
            <div className="grid grid-cols-10 gap-4">
                {/* Left Column (70%) */}
                <div className="col-span-6">
                <VoiceGenerator />
                </div>

                {/* Right Column (30%) */}
                <div className="col-span-4 flex flex-col justify-between">
                <AudioQuote />
                </div>
            </div>
            </div>
        </div>
      </div>
      <ComparisonTable />
      <LanguageSupport />
      <TextCorrection />
      <div
          className="mt-[-40px] bg-gradient-to-b from-[#090932] to-[#24244b]"
        >
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-6xl  p-6 rounded-2xl">
            {/* Two-column grid */}
            <div className="grid grid-cols-10 gap-4">
                {/* Left Column (50%) */}
                <div className="col-span-5">
                  <div className="bg-cardBgPrimary rounded-lg shadow-lg flex items-center justify-center px-8 py-20">
                    <div className="max-w-4xl w-full text-center">
                      <h1 className="text-white text-4xl md:text-4xl font-serif mb-4 max-w-2xl mx-auto">
                        AI Voice that aligns with your brand identity
                      </h1>
                      <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-7">
                        Change the emotion of your stories by introducing the real-sounding voices with the pace, emotion, and pausing you want it to speak in.
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Link href="/" className="bg-buttonPrimary hover:bg-buttonSecondary text-white rounded-lg px-6 py-3 text-sm transition-colors shadow-lg">
                          Generate for Free
                        </Link>
                        <Link href="/" className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-6 py-3 text-sm transition-colors shadow-lg">
                          Playground
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (50%) */}
                <div className="col-span-5 flex flex-col justify-between">
                <FeatureList />
                </div>
            </div>
            </div>
        </div>
      </div>
      <Pricing />
      <FAQSection />
      <Footer />
    </>
  );
}
