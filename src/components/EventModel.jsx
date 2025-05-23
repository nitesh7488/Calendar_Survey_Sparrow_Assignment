import { useState } from 'react';

export default function EventModal({ event, onClose, onSave }) {
  const [title, setTitle] = useState(event?.title || '');
  const [date, setDate] = useState(event?.date || '');
  const [startTime, setStartTime] = useState(event?.startTime || '');
  const [endTime, setEndTime] = useState(event?.endTime || '');
  const [description, setDescription] = useState(event?.description || '');
  const [color, setColor] = useState(event?.color || '#3b82f6');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      ...event,
      title,
      date,
      startTime,
      endTime,
      description,
      color,
    };
    onSave(updatedEvent);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content">
        <div 
          className="modal-header" 
          style={{ backgroundColor: color }}
        >
          <h3 id="modal-title">{event ? 'Edit Event' : 'Add Event'}</h3>
          <button 
            onClick={onClose} 
            className="close-button" 
            aria-label="Close modal"
            style={{ cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
        
        <form className="modal-body" onSubmit={handleSubmit}>
          <label className="block mb-2">
            Title:
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block mb-2">
            Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block mb-2">
            Start Time:
            <input 
              type="time" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
              required 
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block mb-2">
            End Time:
            <input 
              type="time" 
              value={endTime} 
              onChange={(e) => setEndTime(e.target.value)} 
              required 
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block mb-2">
            Description:
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block mb-2">
            Color:
            <input 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              className="w-full p-1 border rounded"
            />
          </label>
          <div className="flex justify-end space-x-2 mt-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
