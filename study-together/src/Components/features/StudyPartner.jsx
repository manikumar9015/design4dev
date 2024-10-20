import { useState } from 'react';
import { Users, Video, MessageSquare, X } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const StudyPartner = () => {
  const [partner, setPartner] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const findPartner = () => {
    setIsSearching(true);
    // Simulate finding a partner
    setTimeout(() => {
      setPartner({
        name: 'Sarah',
        subject: 'Mathematics',
        status: 'online',
        avatar: '👩‍🎓'
      });
      setIsSearching(false);
    }, 2000);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: Date.now(),
        text: newMessage,
        sender: 'you'
      }]);
      setNewMessage('');
    }
  };

  return (
    <Card>
      {partner ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{partner.avatar}</span>
              <div>
                <h3 className="font-medium">{partner.name}</h3>
                <p className="text-sm text-gray-500">Studying {partner.subject}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-700"
                onClick={() => setIsChatOpen(!isChatOpen)}
              >
                <MessageSquare size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-700">
                <Video size={20} />
              </button>
            </div>
          </div>

          {isChatOpen && (
            <div className="border rounded-lg p-3 space-y-3 dark:border-gray-700">
              <div className="h-32 overflow-y-auto space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-2 rounded-lg text-sm ${
                      message.sender === 'you'
                        ? 'bg-blue-500 text-white ml-auto'
                        : 'bg-gray-100 dark:bg-gray-700'
                    } max-w-[80%] w-fit`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={sendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setPartner(null)}>
              End Session
            </Button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-500">{partner.status}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <Users size={48} className="mx-auto text-gray-400" />
          <div>
            <h3 className="font-medium">Find a Study Partner</h3>
            <p className="text-sm text-gray-500 mt-1">
              Connect with someone studying the same subject
            </p>
          </div>
          <Button
            onClick={findPartner}
            disabled={isSearching}
            className="w-full"
          >
            {isSearching ? 'Searching...' : 'Start Matching'}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default StudyPartner;
