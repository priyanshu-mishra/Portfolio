import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

// Sample song data (you can replace this with your own songs later)
const sampleSongs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', cover: '/placeholder-cover-1.jpg', file: '/placeholder-song-1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', cover: '/placeholder-cover-2.jpg', file: '/placeholder-song-2.mp3' },
  { id: 3, title: 'Song 3', artist: 'Artist 3', cover: '/placeholder-cover-3.jpg', file: '/placeholder-song-3.mp3' },
];

const MusicPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState(sampleSongs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = (Number(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress(Number(e.target.value));
    }
  };

  const handleSongChange = (song: typeof sampleSongs[0]) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>Music Player - Priyanshu Mishra</title>
        <meta name="description" content="Priyanshu Mishra's Music Player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
            &larr; Back to Portfolio
</Link>

        <h1 className="text-4xl font-bold mb-8 text-center">My Music</h1>

        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <img src={currentSong.cover} alt={currentSong.title} className="w-64 h-64 mx-auto rounded-lg shadow-lg mb-8" />
            <h2 className="text-2xl font-bold text-center mb-2">{currentSong.title}</h2>
            <p className="text-gray-400 text-center mb-8">{currentSong.artist}</p>

            <div className="mb-8">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <button onClick={handlePlay} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={currentSong.file}
            onTimeUpdate={handleProgress}
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Playlist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleSongs.map((song) => (
              <motion.div
                key={song.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleSongChange(song)}
              >
                <img src={song.cover} alt={song.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{song.title}</h4>
                  <p className="text-gray-400">{song.artist}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;