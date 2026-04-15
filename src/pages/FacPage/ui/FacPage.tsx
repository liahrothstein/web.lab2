import './FacPage.scss';

import { Footer, Header, Main, Nav } from '@widgets/index';

import dekan from '../../../shared/assets/images/dekan.jpg';

export function FacPage() {
  return (
    <div className="facPage">
      <Header />
      <Nav />
      <Main
        content={
          <>
            <h2>Мой факультет: Физики и ИТ</h2>
            <p className="dekan">
              <img src={dekan} alt="dekan" />
              <strong>Декан: </strong>Самофалов Андрей Леонидович
            </p>
            <p>
              Факультет осуществляет профессиональную подготовку программистов, инженеров,
              проектировщиков систем безопасности, разработчиков по для мобильных устройств и т.д.
              Наши выпускники работают в ведущих предприятиях и IT-компаниях мира.
            </p>
            <p>
              Более подробную информацию можно найти на официальном сайте{' '}
              <a href="https://gsu.by/" target="_blank" rel="noreferrer">
                gsu.by
              </a>
              .
            </p>
          </>
        }
      />
      <Footer />
    </div>
  );
}
