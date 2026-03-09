import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './utils/seo';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogArticlePage from './pages/BlogArticlePage';
import CookieConsent from './components/CookieConsent';

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogListPage />} />
                <Route path="/blog/:slug" element={<BlogArticlePage />} />
            </Routes>
            <CookieConsent />
        </>
    );
};

export default App;
