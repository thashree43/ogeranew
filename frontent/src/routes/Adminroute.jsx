import { Routes, Route } from 'react-router-dom';
import Login from '../admin/register/Login';

export const Adminroute = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<h1>Admin 404 Not Found</h1>} />
    </Routes>
  );
};
