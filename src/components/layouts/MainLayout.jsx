import ScrollManager from './ScrollManager';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
        <ScrollManager />
        <Outlet />
    </>
  );
}