import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './Layout/footer'
import { Header } from './Layout/header'
import './i18n';
import { HomePage } from './Pages/Home/HomePage';
import { HomeHeader } from './Layout/home-header';
import { MenuPage } from './Pages/Menu/MenuPage';
import { ConceptPage } from './Pages/Concept/ConceptPage';
import { ContactPage } from './Pages/Contact/ContactPage';
import { AboutPage } from './Pages/A propos/a-propos';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <Header />}
      {isHome && <HomeHeader />}
      {children}
      <Footer />
    </>
  );
}

function App() {

  return (
    <>
    <BrowserRouter basename="/le-pion-commun/">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concept" element={<ConceptPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
