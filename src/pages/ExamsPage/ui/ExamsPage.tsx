import './ExamsPage.scss';

import { testsAndExams } from '@constants/testsAndExams';
import { Footer, Header, Main, Nav } from '@widgets/index';

export function ExamsPage() {
  return (
    <div className="examsPage">
      <Header />
      <Nav />
      <Main
        content={
          <>
            <h2>Зачеты и экзамены</h2>
            <div className="examContainer">
              <div className="tests">
                <h4>Зачеты:</h4>
                <ul>
                  {testsAndExams.tests.map((test) => (
                    <li key={test.subject}>
                      <strong>{test.subject}</strong> — {test.teacher}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="exams">
                <h4>Экзамены:</h4>
                <ul>
                  {testsAndExams.exams.map((test) => (
                    <li key={test.subject}>
                      <strong>{test.subject}</strong> — {test.teacher}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        }
      />
      <Footer />
    </div>
  );
}
