
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookSchedule from './components/scheduler';
import BinLevel from './components/binlevel';

//import BookSchedule from './componets/Scheduler';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/scheduler" element={<BookSchedule/>}/>
      <Route path="/binlevel" element={<BinLevel/>}/>
    </Routes>
    
    
  );
}

export default App;