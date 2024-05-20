'use client'

import {createContext, useContext, useState} from 'react';

const EventContext = createContext({hello: 'world'});

export function EventProvider({ children} : children: React.ReactNode}) {
  let [events, setEvents] = useState({hello: 'world'});

  return (
    <EventContext.Provider value = {{events, setEvents}}>
      {children}
    </EventContext.Provider>
  )
}

export function useEventContext() {
  return useContext(EventContext); 
}