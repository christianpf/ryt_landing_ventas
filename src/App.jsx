import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Layout from './pages/layout';
import Home from './pages/home';
import Second from './pages/second';
import Last from './pages/last';
import Thanks from './pages/thanks';
import NoPage from './pages/NoPage';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/ryt_landing_ventas" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/1_ver_video" element={<Second />}/>
          <Route path="ultimo_paso" element={<Last />}/>
          <Route path="gracias" element={<Thanks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
