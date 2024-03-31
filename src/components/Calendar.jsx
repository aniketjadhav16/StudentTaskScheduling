import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Example data for demonstration
  const initialEvents = [
    {
      id: 1,
      title: 'Study Group Meeting',
      start: new Date(2024, 3, 1, 10, 0),
      end: new Date(2024, 3, 1, 12, 0),
    },
    {
      id: 2,
      title: 'Group Study Session',
      start: new Date(2024, 3, 3, 15, 0),
      end: new Date(2024, 3, 3, 17, 0),
    },
  ];

  useState(() => {
    // Set initial events
    setEvents(initialEvents);
  }, []);

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('Enter a title for your event:');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEvents([...events, newEvent]);
      navigate('/partner-discovery'); // Navigate to partner page after adding event
    }
  };

  const handleSelectEvent = (event) => {
    const title = window.prompt('Edit event title:', event.title);
    if (title) {
      const updatedEvents = events.map((ev) =>
        ev.id === event.id ? { ...ev, title } : ev
      );
      setEvents(updatedEvents);
    }
  };

  const handleDeleteEvent = (event) => {
    if (window.confirm(`Are you sure you want to delete "${event.title}"?`)) {
      const updatedEvents = events.filter((ev) => ev.id !== event.id);
      setEvents(updatedEvents);
    }
  };

  return (
    <div>
      <h2>Calendar</h2>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onSelecting={() => false}
        eventPropGetter={(event, start, end, isSelected) => {
          const style = {
            backgroundColor: isSelected ? '#3174ad' : '#3788d8',
            color: 'white',
            borderRadius: '0px',
            border: 'none',
          };
          return {
            style,
          };
        }}
        components={{
          event: ({ event }) => (
            <div style={{ padding: '5px' }}>
              <strong>{event.title}</strong>
              <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => handleDeleteEvent(event)}>
                &#10006;
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Calendar;
