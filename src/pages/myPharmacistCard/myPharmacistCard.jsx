import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import arrowRightIcon from '../../assets/arrowRightIcon.svg';
import SideMenu from '../../components/sideMenu/sideMenu.jsx';
import './myPharmacistCard.css';

const cardData = [
    {
        id: 1,
        flag: '🇺🇸',
        title: 'Tylenol 복용 관련 질문',
        date: '2026.08.12',
        language: '영어',
    },
    {
        id: 2,
        flag: '🇯🇵',
        title: '감기약 성분 관련 질문',
        date: '2026.08.05',
        language: '일본어',
    },
    {
        id: 3,
        flag: '🇪🇸',
        title: '알레르기약 문의',
        date: '2026.07.28',
        language: '스페인어',
    },
];

function MyPharmacistCardPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        // TODO: 백엔드 연동 시 저장된 카드 상세를 이 id로 조회
        navigate(`/pharmacist-card`, { state: { cardId: id } });
    };

    return (
        <div className="mpc-page">
            <div className="mpc-top-wrapper">
                <button className="mpc-back-btn" onClick={() => navigate('/home')}>
                    <img src={backIcon} alt="뒤로가기" />
                </button>
                <button className="mpc-menu-icon" onClick={() => setIsMenuOpen(true)}>☰</button>
            </div>

            <div className="mpc-title-wrapper">
                <h1 className="mpc-title">내 약사카드</h1>
                <button className="mpc-new-btn">+ 새 카드</button>
            </div>

            <div className="mpc-card-list">
                {cardData.map((card) => (
                    <button
                        className="mpc-card"
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div className="mpc-card-left">
                            <div className="mpc-card-header">
                                <span className="mpc-card-flag">{card.flag}</span>
                                <span className="mpc-card-title">{card.title}</span>
                            </div>
                            <p className="mpc-card-meta">
                                {card.date} · {card.language}
                            </p>
                        </div>
                        <img src={arrowRightIcon} alt="" className="mpc-card-arrow" />
                    </button>
                ))}
            </div>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
}

export default MyPharmacistCardPage;