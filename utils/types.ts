export interface Event {
  id: number;
  name: string;
  date: Date;
  location: string;
  semesterId: number;
  groupId: number;
  yearId: number;
  semester: {
    id: number;
    semester_name: string;
  };
  year: {
    id: number;
    year: string;
  };
  group: {
    id: number;
    group_type: string;
  };
}

export interface NewEvent {
  name: string;
  date: Date;
  location: string;
  attendees: string;
}

export interface EventsContextType {
  events: Event[];
  setEvents: (events: Event[]) => void;
}

export interface SemesterYearOption {
  key: string;
  label: string;
  value: string;
}

export interface MdPicture {
  picture: string;
}

export interface CustomUser {
  name?: string;
  email?: string;
  "smallgroup/mdPicture"?: {
    picture: string;
  };
}
export interface User {
  // Define other properties as needed
  "smallgroup/mdPicture": MdPicture;
  name: string;
  email: string;
}
