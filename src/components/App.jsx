import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <div className={css.conteiner}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
