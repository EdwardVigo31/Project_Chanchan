package com.example.backend_chanchan.domain.repositories;

import java.util.List;

import com.example.backend_chanchan.domain.entities.Event;

public interface EventRepository {
    Event createEvent(Event event);

    Event updateEvent(Event event);

    void deleteEvent(Integer id);

    List<Event> listEvents();
}
