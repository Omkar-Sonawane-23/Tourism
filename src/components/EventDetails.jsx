import React from 'react';
import { useParams } from 'react-router-dom';
import Detailed from '../../Data/Detailed.json';

const EventDetails = () => {
  const { id } = useParams();
  const eventId = parseInt(id, 10);
  const event = Detailed.destinations
    .flatMap(destination => destination.happeningEvents)
    .find(event => event.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1>{event.eventName}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
