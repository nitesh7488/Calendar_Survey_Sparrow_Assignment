export default function Event({ event, isConflict }) {
  return (
    <div 
      className={`event ${isConflict ? 'border-2 border-red-600' : ''}`} 
      style={{ backgroundColor: event.color }}
      title={`${event.title}\n${event.startTime} - ${event.endTime}`}
    >
      {event.title}
    </div>
  );
}
