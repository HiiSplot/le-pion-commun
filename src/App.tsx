import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './Layout/footer'
import { Header } from './Layout/header'
import './i18n';
import { HomePage } from './Pages/Home/HomePage';
import { HomeHeader } from './Layout/home-header';
import { MenuPage } from './Pages/Menu/MenuPage';
import { ConceptPage } from './Pages/Concept/ConceptPage';
import { LudothequePage } from './Pages/Ludotheque/LudothequePage';
import { PartnersPage } from './Pages/Partners/PartnersPage';
import { ReservationPage } from './Pages/Reservation/ReservationPage';
import { ContactPage } from './Pages/Contact/ContactPage';

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
          <Route path="/ludotheque" element={<LudothequePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
