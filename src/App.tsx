import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Route>
      
    </Routes>
  )
};


