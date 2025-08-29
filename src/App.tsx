import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Layout/footer'
import { Header } from './Layout/header'
import { HomePage } from './Pages/Home/HomePage';
import { MenuPage } from './Pages/Menu/MenuPage';
import { ConceptPage } from './Pages/Concept/ConceptPage';
import { ContactPage } from './Pages/Contact/ContactPage';
import './App.css'
import './i18n';

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
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
          <Route path="/" element={<HomePage />} />
          <Route path="/concept" element={<ConceptPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
