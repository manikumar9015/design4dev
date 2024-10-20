import { useState, useEffect } from 'react';
// import { Plant } from 'lucide-react';
import Card from '../ui/Card';
import Progress from '../ui/Progress';
import { useTimerContext } from '../../contexts/TimerContext';

import * as LucideIcons from 'lucide-react';

// Use the Plant icon dynamically
const Plant = LucideIcons.Plant || LucideIcons.Flower; // Fallback to another icon if Plant is unavailable


const VirtualPlant = () => {
  const { focusScore } = useTimerContext();
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    setGrowth(Math.min(focusScore / 100, 1)); // Ensure growth is capped at 1 (100%)
  }, [focusScore]);

  return (
    <Card>
      <div className="text-center">
        <div className="relative">
          <Plant 
            size={100} 
            className="mx-auto mb-4 text-green-500 transition-transform duration-1000"
            style={{ transform: `scale(${0.5 + growth * 0.5})` }} // Scale plant from 0.5 to 1
          />
        </div>
        <h3 className="font-medium mb-2">Focus Plant</h3>
        <Progress value={growth * 100} max={100} className="bg-green-100" /> {/* Progress bar based on percentage */}
        <p className="text-sm text-gray-500 mt-2">
          {growth < 0.3 ? 'Keep focusing to help your plant grow!' :
           growth < 0.7 ? 'Your plant is growing nicely!' :
           'Your plant is thriving!'}
        </p>
      </div>
    </Card>
  );
};

export default VirtualPlant;
