import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashPage from './pages/splash/splash.jsx'
import LoginPage from './pages/login/login.jsx'
import SignupPage from './pages/signup/signup.jsx'
import HomePage from './pages/home/home.jsx'
import SearchPage from './pages/search/search.jsx'
import ResultPage from './pages/result/result.jsx'
import ProductListPage from './pages/productList/productList.jsx'
import ProductDetailPage from './pages/productDetail/productDetail.jsx'
import CompareResultPage from './pages/compareResult/compareResult.jsx'
import PharmacistCardPage from './pages/pharmacistCard/pharmacistCard.jsx'
import CardSavedPage from './pages/cardSaved/cardSaved.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/compare-result" element={<CompareResultPage />} />
        <Route path="/pharmacist-card" element={<PharmacistCardPage />} />
        <Route path="/card-saved" element={<CardSavedPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App