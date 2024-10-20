import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import Card from '../ui/Card';
import Progress from '../ui/Progress';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);

  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Lo-fi Study Beats</h3>
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-20"
            />
          </div>
        </div>
        <Progress value={currentTime} max={100} />
        <div className="flex justify-center items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <SkipBack size={20} />
          </button>
          <button 
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <SkipForward size={20} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MusicPlayer;