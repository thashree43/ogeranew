import { Routes, Route } from 'react-router-dom';
import Homepage from '../client/home/Homepage';

export const Clientroute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='*' element={<h1>Client 404 Not Found</h1>} />
    </Routes>
  );
};
