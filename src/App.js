
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Complete from './component/Running/Complete';
import Running from './component/Running/Running';

function App() {
  return (

    <Routes  >
      <Route path='/' element={<Home />} />
      <Route path='/running' element={<Running />} />
      <Route path='/complete' element={<Complete />} />
    </Routes>
  )
}

export default App;
