export const getEventsForDay = (events, date) => {
  const formattedDate = date.format('YYYY-MM-DD');
  return events
    .filter(event => event.date === formattedDate)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
};

export const detectConflicts = (events) => {
  const eventsByDate = {};
  
  // Group events by date
  events.forEach(event => {
    if (!eventsByDate[event.date]) {
      eventsByDate[event.date] = [];
    }
    eventsByDate[event.date].push(event);
  });
  
  const conflicts = [];
  
  // Check for conflicts on each date
  Object.values(eventsByDate).forEach(dateEvents => {
    dateEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));
    
    for (let i = 1; i < dateEvents.length; i++) {
      const prevEnd = dateEvents[i-1].endTime;
      const currStart = dateEvents[i].startTime;
      
      if (currStart < prevEnd) {
        conflicts.push(dateEvents[i-1]);
        conflicts.push(dateEvents[i]);
      }
    }
  });
  
  return conflicts;
};