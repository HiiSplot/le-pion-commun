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
  const isHome = location.pathname === '/le-pion-commun/';

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
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/le-pion-commun/" element={<HomePage />} />
          <Route path="/le-pion-commun/concept" element={<ConceptPage />} />
          <Route path="/le-pion-commun/menu" element={<MenuPage />} />
          <Route path="/le-pion-commun/ludotheque" element={<LudothequePage />} />
          <Route path="/le-pion-commun/reservation" element={<ReservationPage />} />
          <Route path="/le-pion-commun/partenaires" element={<PartnersPage />} />
          <Route path="/le-pion-commun/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
