
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProtectRoute from './components/ProtectRoute'
import DR_Login from './pages/DR_Login'
import DR_Main from './pages/DR_Main'
import Overlay_Prototype from './components/Overlay_Prototype'

function App() {
  return (
    <div className='App'>
      <div className='Overlays'>
        <Overlay_Prototype/>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<DR_Login/>}/>
          <Route path='/main' element={
            <ProtectRoute>
              <DR_Main/>
            </ProtectRoute>
            }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
