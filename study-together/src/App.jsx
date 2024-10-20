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
// import Footer from './components/layout/Footer';
// import Timer from './components/core/Timer';
// import MusicPlayer from './components/core/MusicPlayer';
// import VirtualPlant from './components/core/VirtualPlant';
// import FocusMeter from './components/core/FocusMeter';
// import StudyPartner from './components/features/StudyPartner';
// import NotificationPanel from './components/features/NotificationPanel';
// import SettingsPanel from './components/features/SettingsPanel';

const App = () => {
  return (
    <ThemeProvider>
      <TimerProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
          <Navbar />
          
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Study Area */}
              <div className="lg:col-span-2 space-y-6">
                <Timer />
                <MusicPlayer />
                <FocusMeter />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <VirtualPlant />
                <StudyPartner />
                <NotificationPanel />
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