import axios from 'axios';
import ICAL from 'ical.js';

export default async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.airbnb.com/calendar/ical/32234578.ics?s=f61a4ebfd3a89195fcfdee22b14e90f3'
    );
    const jcalData = ICAL.parse(response.data);

    // Create a new ICAL.Component
    const comp = new ICAL.Component(jcalData);
    
    // Get the array of VEVENT components
    const vevents = comp.getAllSubcomponents('vevent');

    // Convert the VEVENT components into a more useful format
    const calendarEvents = vevents.map(veventComp => {
      const vevent = new ICAL.Event(veventComp);
      
      return {
        start: vevent.startDate.toString(),
        end: vevent.endDate.toString(),
        summary: vevent.summary,
        description: vevent.description,
      };
    });

    console.log('Calendar events:', calendarEvents);
    res.status(200).json(calendarEvents);
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    res.status(500).json({ message: 'Error fetching calendar data' });
  }
};
