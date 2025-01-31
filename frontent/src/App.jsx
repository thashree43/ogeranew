import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Clientroute } from './routes/clientroute';
import { Adminroute } from './routes/adminroute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Clientroute />} />
        <Route path='/admin/*' element={<Adminroute />} />
      </Routes>
    </Router>
  );
};

export default App;
