interface Test {
  subject: string;
  teacher: string;
}

interface Exam {
  subject: string;
  teacher: string;
}

export interface TestsAndExams {
  tests: Test[];
  exams: Exam[];
}
