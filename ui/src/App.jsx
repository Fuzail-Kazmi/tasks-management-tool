import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/index';

const DashboardPage = React.lazy(() => import('@/features/pages/layout/dashboard/dashboard'))


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/dashboard' element={<DashboardPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
