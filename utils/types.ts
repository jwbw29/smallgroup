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
