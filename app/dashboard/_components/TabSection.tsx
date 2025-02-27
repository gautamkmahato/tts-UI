"use client";

import { useEffect, useState } from "react";
import { Loader2, Play } from "lucide-react";
import generateAudio from "@/app/action/generateAudio";
import { voices } from "@/data/voiceData";
import { countries } from "@/data/countries";
import { languages } from "@/data/languages";

// Define types
interface TTSRequest {
    text: string;
    voice: string;
    country?: string;
    language?: string;
    gender?: string;
}

interface TabSectionProps {
    getData: (result: unknown) => void;
}

type SelectType = "country" | "language" | "gender" | ""; // Restrict valid values

const TabSection: React.FC<TabSectionProps> = ({ getData }) => {
    const [activeTab, setActiveTab] = useState<"tts" | "voiceCloning">("tts");
    const [text, setText] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [audioUrl, setAudioUrl] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectType, setSelectType] = useState<SelectType>("");
    const [voice, setVoice] = useState<string>("");
    const [voiceList, setVoiceList] = useState<string[]>([]);

    // Handle Select Change to clear other fields when selecting one
    const handleSelectChange = (type: SelectType, value: string) => {
        setSelectType(type);
        if (type === "country") {
            setCountry(value);
            setLanguage("");
            setGender("");
        } else if (type === "language") {
            setLanguage(value);
            setCountry("");
            setGender("");
        } else if (type === "gender") {
            setGender(value);
            setCountry("");
            setLanguage("");
        }
    };

    console.log(name)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await filterVoices();
        await getRealVoiceName();

        const requestData: TTSRequest = { 
            text: text,
            voice: voice
        };

        if (language) requestData.language = language;
        if (country) requestData.country = country;
        if (gender) requestData.gender = gender;

        console.log("language", language);
        console.log("country", country);
        console.log("gender", gender);
        console.log("voice", voice);

        try {
            setLoading(true);
            const result = await generateAudio(requestData);
            console.log(result)
            if (result?.status) {
                setAudioUrl((prev) => [...prev, result.url]);
                getData(result);
            } else{
                console.log("Error in generating audio")
            }
        } catch (error) {
            console.error("Error generating audio: ", error);
        } finally {
            setLoading(false);
        }
    };

    const filterVoices = async () => {
        let filteredVoices = voices;

        if (gender) {
            filteredVoices = filteredVoices.filter((voice) => voice.gender === gender);
        }
        if (language) {
            filteredVoices = filteredVoices.filter((voice) => voice.languageName === language);
        }
        if (country) {
            filteredVoices = filteredVoices.filter((voice) => voice.countryName === country);
        }

        const voiceArray = filteredVoices.map((voice) => voice.voicename);
        setVoiceList(voiceArray);
    };

    const getRealVoiceName = async () =>{
        const name = voices.filter((voiceData) => voiceData.voicename === voice)
        console.log(name);
        setName(name[0]?.name || "");
    }


    useEffect(() => {
        filterVoices();
        getRealVoiceName();
    }, [country, language, gender, voice]); // Run filterVoices whenever these values change


    return (
        <div className="min-h-screen text-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                {/* Tabs */}
                <div className="flex mb-4">
                    <button
                        className={`px-4 py-2 ${activeTab === "tts" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"} rounded-t-lg mr-2`}
                        onClick={() => setActiveTab("tts")}
                    >
                        TTS
                    </button> 
                    <button
                        className={`px-4 py-2 ${activeTab === "voiceCloning" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"} rounded-t-lg`}
                        onClick={() => setActiveTab("voiceCloning")}
                    >
                        Voice Cloning
                    </button>
                </div>

                {/* Content */}
                <div className="bg-cardBgPrimary rounded-b-lg p-6">
                    {activeTab === "tts" && (
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Textarea */}
                                <textarea
                                    className="w-full h-32 bg-gray-800 text-gray-100 rounded-lg p-4 resize-none"
                                    placeholder="Enter text to convert to speech..."
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />

                                {/* Select Options */}
                                <div className="flex items-center space-x-4">
                                    {/* Main Select */}
                                    <select
                                        className="bg-gray-700 text-gray-100 rounded-lg p-2 flex-grow"
                                        value={selectType}
                                        onChange={(e) => setSelectType(e.target.value as SelectType)}
                                    >
                                        <option value="">Select voice</option>
                                        <option value="country">Country</option>
                                        <option value="language">Language</option>
                                        <option value="gender">Gender</option>

                                    </select>

                                    {/* Conditional Selects */}
                                    {selectType === "country" && (
                                            <select
                                                className="bg-gray-700 text-gray-100 rounded-lg p-2 flex-grow"
                                                value={country}
                                                onChange={(e) => handleSelectChange("country", e.target.value)}
                                            >
                                            <option value="">Select Country</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    
                                    )}

                                    {selectType === "language" && (
                                        <select
                                            className="bg-gray-700 text-gray-100 rounded-lg p-2 flex-grow"
                                            value={language}
                                            onChange={(e) => handleSelectChange("language", e.target.value)}
                                        >
                                            <option value="">Select Language</option>
                                            {languages.map((language, index) => (
                                                <option key={index} value={language}>
                                                    {language}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {selectType === "gender" && (
                                        <select
                                            className="bg-gray-700 text-gray-100 rounded-lg p-2 flex-grow"
                                            value={gender}
                                            onChange={(e) => handleSelectChange("gender", e.target.value)}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    )}
                                    {voiceList && voiceList?.length > 0 && (
                                        <select
                                            className="bg-gray-700 text-gray-100 rounded-lg p-2 flex-grow"
                                            value={voice}
                                            onChange={(e) => setVoice(e.target.value)}
                                        >
                                            <option value="">Select Voice</option>
                                            {voiceList?.map((voiceName, index) => (
                                                <option key={index} value={voiceName}>
                                                    {voiceName}
                                                </option>
                                            ))}
                                        </select>
                                    )}


                                    {/* Submit Button with Loading */}
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white rounded-lg p-2 flex items-center justify-center w-32"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <Loader2 className="animate-spin mr-2" size={18} />
                                        ) : (
                                            <Play className="mr-2" size={18} />
                                        )}
                                        {loading ? "Generating..." : "Generate"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}

                    {/* Audio Player */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Generated Audio:</h3>
                        {audioUrl?.map((audio, index) => (
                            <audio key={index} controls className="w-full mt-2">
                                <source src={audio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        ))}
                    </div>

                    {/* Voice Cloning Placeholder */}
                    {activeTab === "voiceCloning" && (
                        <div className="text-center py-8">
                            <h2 className="text-2xl mb-4">Voice Cloning</h2>
                            <p>Voice cloning feature coming soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TabSection;
