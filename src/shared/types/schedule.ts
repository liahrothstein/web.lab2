interface Subject {
  subject: string[];
}

export interface Schedule {
  day: string;
  time: string[];
  subjects: Subject[];
}
