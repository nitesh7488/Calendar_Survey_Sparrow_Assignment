export default function WeekHeader() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="grid grid-cols-7 gap-1 mb-2 font-semibold text-center">
      {days.map(day => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}