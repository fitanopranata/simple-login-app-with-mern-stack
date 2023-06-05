import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
