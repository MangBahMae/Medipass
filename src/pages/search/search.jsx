import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import SideMenu from '../../components/sideMenu/sideMenu.jsx';
import './search.css';

function SearchPage() {
    const location = useLocation();
    const [mode, setMode] = useState(location.state?.mode || 'medication');
    const [productName, setProductName] = useState(
        location.state?.mode === 'medication' ? (location.state?.query || '') : ''
    );
    const [symptomText, setSymptomText] = useState(
        location.state?.mode === 'symptom' ? (location.state?.query || '') : ''
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        // TODO: 백엔드 연동 시 여기서 입력값(제품명/증상 등)을 쿼리로 넘겨야 함
        if (mode === 'medication') {
            navigate('/result');
        } else {
            navigate('/product-list');
        }
    };

    return (
        <div className="search-page">
            <div className="search-back-wrapper">
                <button className="search-back-btn" onClick={() => navigate(-1)}>
                    <img src={backIcon} alt="뒤로가기" />
                </button>
                <button className="search-menu-icon" onClick={() => setIsMenuOpen(true)}>☰</button>
            </div>

            <div className="search-title-section">
                <h1>미국 일반의약품 찾기</h1>
                <p>현재 MVP에서는 미국의 제한된 일반약품 데이터만 보여줘요.</p>
            </div>

            <div className="search-tab-buttons">
                <button
                    className={`search-tab-btn ${mode === 'medication' ? 'search-tab-btn--active' : ''}`}
                    onClick={() => setMode('medication')}
                >
                    복용 중인 약으로 찾기
                </button>
                <button
                    className={`search-tab-btn ${mode === 'symptom' ? 'search-tab-btn--active' : ''}`}
                    onClick={() => setMode('symptom')}
                >
                    증상으로 찾기
                </button>
            </div>

            {mode === 'medication' ? (
                <div className="search-field">
                    <label>제품명</label>
                    <input
                        type="text"
                        placeholder="예) Tylenol"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
            ) : (
                <>
                    <div className="search-field">
                        <label>현재 증상</label>
                        <input
                            type="text"
                            placeholder="예) 두통"
                            value={symptomText}
                            onChange={(e) => setSymptomText(e.target.value)}
                        />
                    </div>

                    <div className="search-symptom-tags">
                        <span className="search-tag">감기</span>
                        <span className="search-tag">두통</span>
                        <span className="search-tag">소화불량</span>
                        <span className="search-tag">알레르기</span>
                    </div>

                    <div className="search-warning-box">
                        심한 통증, 호흡곤란, 의식이 흐려지는 등 위험한 증상이 있다면 일반의약품 탐색보다 의료기관 이용이 우선이에요.
                    </div>
                </>
            )}

            <div className="search-field">
                <label>국가</label>
                <input
                    type="text"
                    className="search-country-input"
                    defaultValue="🇺🇸 미국(USA)"
                    readOnly
                />
            </div>

            <button
                className={`search-submit-btn ${mode === 'medication' ? 'search-submit-btn--medication' : 'search-submit-btn--symptom'}`}
                onClick={handleSearch}
            >
                검색하기
            </button>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
}

export default SearchPage;