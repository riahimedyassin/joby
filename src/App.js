import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login'
import Error from './pages/Error';
import Found from './pages/Found';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="findjob" element={<Found />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
