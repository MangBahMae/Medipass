import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/login/login.jsx'
import SignupPage from './pages/signup/signup.jsx'
import HomePage from './pages/home/home.jsx'
import SearchPage from './pages/search/search.jsx'
import ResultPage from './pages/result/result.jsx'
import ProductListPage from './pages/productList/productList.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App