import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Layout = React.lazy(() => import('@/components/layout/index'))
const DashboardPage = React.lazy(() => import('@/features/pages/dashboard/index'))
const ProfilePage = React.lazy(() => import('@/features/pages/profile/index'))
const TaskDetailPage = React.lazy(() => import('@/features/pages/task/index'))
const LoginPage = React.lazy(() => import('@/features/auth/login'))
const SignupPage = React.lazy(() => import('@/features/auth/signup'))

const NotFoundPage = React.lazy(() => import('@/features/pages/not_found/index'))



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/:id' element={<TaskDetailPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
