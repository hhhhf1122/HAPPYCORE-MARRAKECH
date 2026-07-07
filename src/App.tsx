import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sisterhood from './pages/Sisterhood';
import Roots from './pages/Roots';
import Executive from './pages/Executive';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sisterhood" element={<Sisterhood />} />
          <Route path="roots" element={<Roots />} />
          <Route path="executive" element={<Executive />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="reservation" element={<ReservationPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
