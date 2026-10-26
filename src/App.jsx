import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<div>Shop Page</div>} />
      </Route>
    </Routes>
  );
}
