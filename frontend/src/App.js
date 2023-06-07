import React, {Suspense} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import './css/style.scss'
// import Dashboard from './components/Dashboard.js';

const Layout = React.lazy(() => import('./components/Dashboard.js'))

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Layout/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
