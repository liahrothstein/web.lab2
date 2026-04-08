import './MainPage.scss';

import { Footer, Header, Main, Nav } from '@widgets/index';

import gsu from '../../../shared/assets/images/gsu.jpeg';
import photo from '../../../shared/assets/images/photo.jpg';

export function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <Nav />
      <Main
        content={
          <>
            <h3>Добро пожаловать на мою страницу</h3>
            <h4>Обо мне:</h4>
            <img src={photo} alt="photo" className="photo" />
            <div className="info">
              <p>
                Студент: <span>Новиков Дмитрий Алексеевич</span>
              </p>
              <p>
                Контакты: <span>liahrothstein@gmail.com</span>
              </p>
            </div>
            <h4>Информация о ВУЗе</h4>
            <img src={gsu} alt="gsu" className="gsu" />
            <p>ГГУ им. Франциска Скорины</p>
          </>
        }
      />
      <Footer />
    </div>
  );
}
