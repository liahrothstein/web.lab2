import { FacPage, GroupPage, MainPage } from '@pages/index';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/web.lab2/" />} />
      <Route path="/web.lab2/" element={<MainPage />} />
      <Route path="/web.lab2/group" element={<GroupPage />} />
      <Route path="/web.lab2/fac" element={<FacPage />} />
    </Routes>
  );
}

export default App;
