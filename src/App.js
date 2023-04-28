import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login'
import Error from './pages/Error';
import Found from './pages/Found';
import Profile from './pages/Profile'
import Company from './pages/Company/Company';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="findjob" element={<Found />}></Route>
      {localStorage.getItem("isAuth") && <Route path="/profile" element={<Profile />}></Route>}
      <Route path='company' element={<Company />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
