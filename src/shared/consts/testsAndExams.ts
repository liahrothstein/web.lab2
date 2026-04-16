import type { TestsAndExams } from '../types/testsAndExams';

export const testsAndExams: TestsAndExams = {
  tests: [
    { subject: 'Физическая культура', teacher: '-' },
    { subject: 'Физический практикум', teacher: 'Сомов П.В., Соколов С.И.' },
    { subject: 'Основы Web-технологий', teacher: 'Бабич К.С.' },
    { subject: 'Основы векторного и тензорного анализа', teacher: 'Гришечкин Ю.А.' },
    { subject: 'Политология', teacher: 'Исайчикова Н.И.' },
  ],
  exams: [
    { subject: 'Философия', teacher: 'Марченко О.В.' },
    { subject: 'Программирование на C++', teacher: 'Дей Е.А.' },
    { subject: 'Дифференциальные и интегральные уравнения', teacher: 'Немилостивая В.А.' },
    { subject: 'Иностранный язык', teacher: 'Лозовская Т.В.' },
    { subject: 'Молекулярная физика', teacher: 'Купо А.Н.' },
  ],
};
