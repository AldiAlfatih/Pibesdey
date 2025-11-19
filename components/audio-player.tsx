"use client";

import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hideControl, setHideControl] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    const handlePlayStarlight = () => {
      if (!audioRef.current) return;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHideControl(true);
      }).catch(() => {
        // still hide control even if play was blocked, since user clicked the gift
        setHideControl(true);
      });
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('play-starlight', handlePlayStarlight as EventListener);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  useEffect(() => {
    const cleanup = () => {
      document.removeEventListener('play-starlight', (() => {}) as EventListener);
    };
    return cleanup;
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/starlight.mp3" loop />

      {!hideControl && (
        <button
          onClick={toggle}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '⏸' : '▶️'}
        </button>
      )}
    </>
  );
}
