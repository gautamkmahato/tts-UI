"use client";


import { useRef, useState } from "react";

export default function ScreenRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);

  // async function startRecording() {
  //   const stream = await navigator.mediaDevices.getDisplayMedia({
  //     video: { frameRate: 30 },
  //     audio: true,
  //   });

  //   const mediaRecorder = new MediaRecorder(stream, {
  //     mimeType: "video/webm",
  //   });

  //   mediaRecorder.ondataavailable = (event) => {
  //     if (event.data.size > 0) recordedChunks.current.push(event.data);
  //   };

  //   mediaRecorder.onstop = () => {
  //     const blob = new Blob(recordedChunks.current, { type: "video/webm" });
  //     setVideoUrl(URL.createObjectURL(blob));
  //     recordedChunks.current = [];
  //   };

  //   mediaRecorderRef.current = mediaRecorder;
  //   mediaRecorder.start();
  //   setIsRecording(true);
  // }

  async function startRecording() {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { frameRate: 60 }, // Set frame rate to 60 FPS
      audio: true,
    });
  
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm",
    });
  
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.current.push(event.data);
    };
  
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks.current, { type: "video/webm" });
      setVideoUrl(URL.createObjectURL(blob));
      recordedChunks.current = [];
    };
  
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setIsRecording(true);
  }
  

  function stopRecording() {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Screen Recorder</h1>
      <div className="flex gap-4">
        {!isRecording ? (
          <button onClick={startRecording} className="bg-green-600 px-6 py-3 rounded-lg">Start Recording</button>
        ) : (
          <button onClick={stopRecording} className="bg-red-600 px-6 py-3 rounded-lg">Stop Recording</button>
        )}
      </div>
      {videoUrl && (
        <div className="mt-6">
          <video src={videoUrl} controls className="w-full max-w-lg rounded-lg" />
          <a href={videoUrl} download="recording.webm" className="block mt-2 text-blue-400">Download Video</a>
        </div>
      )}
    </div>
  );
}


