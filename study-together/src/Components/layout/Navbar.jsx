import ThemeToggle from '../ui/ThemeToggle';
import { Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">StudyTogether</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Settings size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;