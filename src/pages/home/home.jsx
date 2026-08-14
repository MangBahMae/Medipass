import { useState } from 'react';
import SideMenu from '../../components/sideMenu/sideMenu.jsx';
import './home.css';

function HomePage() {
    const [mode, setMode] = useState('medication');
    const [isMenuOpen, setIsMenuOpen] = useState(false); {/* 추가 1 */ }

    return (
        <div className="home-page">
            <header className="home-header">
                <div className="home-logo">
                    <span className="home-logo-icon">+</span>
                    <span>약쏙</span>
                </div>
                <button className="home-menu-icon" onClick={() => setIsMenuOpen(true)}>☰</button>   {/* 추가 2 */}
            </header>

            <div className="home-greeting-section">
                <p className="home-subtitle">해외에서도 약 정보를 쉽게</p>
                <h1 className="home-greeting">안녕하세요!<br />어떤 도움을 드릴까요?</h1>
                <p className="home-hint">💡 찾는 약이 없나요? 약 이름을 알려주세요!</p>
            </div>

            <div className="home-tab-buttons">
                <button
                    className={`home-tab-btn ${mode === 'medication' ? 'home-tab-btn--active' : ''}`}
                    onClick={() => setMode('medication')}
                >
                    복용 중인 약으로 찾기
                </button>
                <button
                    className={`home-tab-btn ${mode === 'symptom' ? 'home-tab-btn--active' : ''}`}
                    onClick={() => setMode('symptom')}
                >
                    증상으로 찾기
                </button>
            </div>

            <div className="home-search-box">
                <input
                    className="home-search-input"
                    type="text"
                    placeholder={mode === 'medication' ? '어떤 약을 드시고 있나요?' : '어떤 증상이 있나요?'}
                />
                <button className="home-search-submit">→</button>
            </div>

            {mode === 'symptom' && (
                <div className="home-symptom-tags">
                    <p className="home-symptom-tags-title">자주 찾는 증상</p>
                    <div className="home-symptom-tags-list">
                        <span className="home-tag">알레르기</span>
                        <span className="home-tag">소화</span>
                        <span className="home-tag">염증/통증</span>
                        <span className="home-tag">감기</span>
                        <span className="home-tag">두통</span>
                        <span className="home-tag">피부</span>
                        <span className="home-tag">멀미/메스꺼움</span>
                        <span className="home-tag">기타</span>
                    </div>
                </div>
            )}

            <div className="home-info-box">
                <h3>약로밍은 이렇게 도와드려요</h3>
                <p>한국에서 먹는 약과 미국 일반의약품의 핵심 성분을 비교하고, 확인이 필요한 내용을 쉬운 말과 약사 질문 카드로 정리해요.</p>
            </div>

            <div className="home-disclaimer-box">
                이 서비스는 의약품을 진단·처방·추천하지 않습니다. 실제 복용 전에는 의사 또는 약사에게 확인하세요.
            </div>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />   {/* 추가 3 */}
        </div>
    );
}

export default HomePage;