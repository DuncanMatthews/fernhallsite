import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await fetch('/api/calendar');
        const data = await response.json();
        setEvents(data.map(event => ({
          title: event.summary,
          start: new Date(event.start),
          end: new Date(event.end),
          allDay: true,
        })));
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchCalendarData();
  }, []);

  const handleSelectEvent = (event) => {
    alert(`Selected event: ${event.title}`)
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default CalendarView;
