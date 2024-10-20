// src/App.jsx
import { ThemeProvider } from './contexts/ThemeContext';
import { TimerProvider } from './contexts/TimerContext';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Timer from './Components/core/Timer';
import MusicPlayer from './Components/core/MusicPlayer';
import VirtualPlant from './Components/core/VirtualPlant';
import FocusMeter from './Components/core/FocusMeter';
import StudyPartner from './Components/features/StudyPartner';
import NotificationPanel from './Components/features/NotificationPanel';
import SettingsPanel from './Components/features/SettingsPanel';
import Intro from './Components/features/Intro';


const App = () => {
  return (
    <ThemeProvider>
      <TimerProvider>
        <div className="min-h-screen  dark:bg-custom-gray-1 flex flex-col">
          <Navbar />
          
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Study Area */}
              <div className="lg:col-span-2 space-y-6">
                <Intro />
                <Timer />
                <MusicPlayer />
                <FocusMeter />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <VirtualPlant />
                <StudyPartner />
                <NotificationPanel />
                <SettingsPanel />
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </TimerProvider>
    </ThemeProvider>
  );
};

export default App;