import { Routes, Route } from 'react-router-dom';
import Mainlayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}