import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={css.main_content}>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
