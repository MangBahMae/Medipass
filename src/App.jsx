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
import MyPharmacistCardPage from './pages/myPharmacistCard/myPharmacistCard.jsx'
import CardSavedPage from './pages/cardSaved/cardSaved.jsx'
import MyInfoPage from './pages/myInfo/myInfo.jsx'
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
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/compare-result/:id" element={<CompareResultPage />} />
        <Route path="/pharmacist-card" element={<PharmacistCardPage />} />
        <Route path="/my-pharmacist-card" element={<MyPharmacistCardPage />} />
        <Route path="/card-saved" element={<CardSavedPage />} />
        <Route path="/my-info" element={<MyInfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App