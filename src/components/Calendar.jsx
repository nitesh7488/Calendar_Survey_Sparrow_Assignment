import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Header from './Header';
import WeekHeader from './WeekHeader';
import Event from './Event';
import EventModal from './EventModel';
import { getMonthDays, isToday } from '../utils/dateUtils';
import { getEventsForDay, detectConflicts } from '../utils/eventUtils';

export default function Calendar({ events: staticEvents }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState(staticEvents || []);
  const [conflicts, setConflicts] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (!staticEvents) {
      fetch('/events.json')
        .then(res => res.json())
        .then(data => {
          setEvents(data);
          setConflicts(detectConflicts(data));
        });
    } else {
      setConflicts(detectConflicts(staticEvents));
    }
  }, [staticEvents]);

  const handleSave = (updatedEvent) => {
    setEvents(prevEvents => {
      const existingIndex = prevEvents.findIndex(e => e.id === updatedEvent.id);
      let newEvents;
      if (existingIndex !== -1) {
        newEvents = [...prevEvents];
        newEvents[existingIndex] = updatedEvent;
      } else {
        newEvents = [...prevEvents, { ...updatedEvent, id: Date.now() }];
      }
      setConflicts(detectConflicts(newEvents));
      return newEvents;
    });
    setSelectedEvent(null);
  };

  const days = getMonthDays(currentMonth).map(day => {
    const dayEvents = getEventsForDay(events, day);
    const isCurrentMonth = day.isSame(currentMonth, 'month');
    
    return (
      <div
        key={day.toString()}
        className={`day ${!isCurrentMonth ? 'disabled' : ''} ${
          isToday(day) ? 'today' : ''
        }`}
      >
        <span className={`day-number ${!isCurrentMonth ? 'text-gray-400' : ''}`}>
          {day.format('D')}
        </span>
        <div className="events">
          {dayEvents.map(event => (
            <Event 
              key={event.id} 
              event={event} 
              onClick={() => setSelectedEvent(event)}
              isConflict={conflicts.some(c => c.id === event.id)}
            />
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="calendar-container">
      <div className="flex justify-between items-center mb-2">
        <Header
          month={currentMonth}
          onPrev={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}
          onNext={() => setCurrentMonth(currentMonth.add(1, 'month'))}
        />
        <button
          onClick={() => setSelectedEvent({ title: '', date: '', startTime: '', endTime: '', description: '', color: '#3b82f6' })}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Event
        </button>
      </div>
      
      <WeekHeader />
      
      <div className="days-grid">
        {days}
      </div>
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
          onSave={handleSave}
        />
      )}
    </div>
  );
}
