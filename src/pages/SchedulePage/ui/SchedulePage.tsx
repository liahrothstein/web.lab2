import './SchedulePage.scss';

import { schedule } from '@constants/schedule';
import { Footer, Header, Main, Nav } from '@widgets/index';

export function SchedulePage() {
  return (
    <div className="schedulePage">
      <Header />
      <Nav />
      <Main
        content={
          <>
            <h2>Расписание занятий</h2>
            <table>
              <thead>
                <tr>
                  <th>День недели</th>
                  <th>Время</th>
                  <th>Предмет</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((scheduleElement) => (
                  <tr key={scheduleElement.day}>
                    <td>{scheduleElement.day}</td>
                    <td>
                      <table>
                        {scheduleElement.time.map((timeElement) => (
                          <tr key={timeElement}>
                            <td className="time">{timeElement}</td>
                          </tr>
                        ))}
                      </table>
                    </td>
                    <td>
                      {scheduleElement.subjects.map((subjectsElement) => (
                        <table key={subjectsElement.subject[0]}>
                          <tbody>
                            {subjectsElement.subject.map((subject, _, array) => (
                              <tr key={subject}>
                                <td className={array.length === 1 ? 'oneSubject' : 'twoSubjects'}>
                                  {subject}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
      />
      <Footer />
    </div>
  );
}
