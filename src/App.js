import Calendar from './components/Calendar';
import './styles/index.css';

const staticEvents = [
  {
    id: 1,
    title: "Team Standup",
    date: "2025-05-25",
    startTime: "09:00",
    endTime: "09:30",
    color: "#3b82f6",
    description: "Daily team sync meeting"
  },
  {
    id: 2,
    title: "Client Meeting",
    date: "2025-05-25",
    startTime: "11:00",
    endTime: "12:00",
    color: "#10b981",
    description: "Project review with client"
  },
  {
    id: 3,
    title: "Lunch Break",
    date: "2025-05-25",
    startTime: "12:30",
    endTime: "13:30",
    color: "#f59e0b",
    description: ""
  },
  {
    id: 4,
    title: "Code Review",
    date: "2025-05-25",
    startTime: "14:00",
    endTime: "15:30",
    color: "#8b5cf6",
    description: "PR review session"
  },
  {
    id: 5,
    title: "Daily Standup",
    date: "2025-05-25",
    startTime: "00:00",
    endTime: "01:30",
    color: "#f6be23",
    description: "Daily team sync meeting"
  },
  {
    id: 6,
    title: "Weekly catchup",
    date: "2025-05-25",
    startTime: "04:30",
    endTime: "07:30",
    color: "#f6501e",
    description: "Weekly team catchup"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Calendar App
        </h1>
        <p className="text-center text-gray-600 mt-2">
          A Google Calendar-like interface
        </p>
      </header>
      <Calendar events={staticEvents} />
    </div>
  );
}

export default App;
