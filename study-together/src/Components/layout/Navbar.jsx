import ThemeToggle from '../ui/ThemeToggle';
import { Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b dark:border-gray-700 sticky top-0 backdrop-blur-lg bg-white/70 dark:bg-custom-gray-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold"> <span className='text-white'>Study</span><span className='text-orange-500'>Buddy</span></h1>
          </div>
          <div className="flex items-center gap-4 text-white">
            <ThemeToggle />
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-white">
              <Settings size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-white">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;