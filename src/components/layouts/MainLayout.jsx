import { Outlet } from 'react-router-dom';
import ScrollManager from './ScrollManager';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}