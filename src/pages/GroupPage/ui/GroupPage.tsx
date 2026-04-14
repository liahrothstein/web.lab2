import './GroupPage.scss';

import { myGroup } from '@constants/myGroup';
import { Footer, Header, Main, Nav } from '@widgets/index';

export function GroupPage() {
  return (
    <div className="groupPage">
      <Header />
      <Nav />
      <Main
        content={
          <>
            <h2>Моя группа: КФ-17</h2>
            <p>
              <strong>Специальность: </strong>Компьютерная физика
            </p>
            <h4>Список группы:</h4>
            <div className="group">
              {myGroup.map((group) => (
                <div className="subgroup" key={group.subgroup}>
                  <h6>Подгруппа {group.subgroup}:</h6>
                  <ol>
                    {group.students.map((student) => (
                      <li key={student}>{student}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </>
        }
      />
      <Footer />
    </div>
  );
}
