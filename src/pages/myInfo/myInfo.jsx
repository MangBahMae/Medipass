import { useState } from 'react';
import backIcon from '../../assets/backIcon.svg';
import profileIcon from '../../assets/profileIcon.svg';
import SideMenu from '../../components/sideMenu/sideMenu.jsx';
import './myInfo.css';

function MyInfoPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="mi-page">
            <div className="mi-top-wrapper">
                <button className="mi-back-btn">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
                <button className="mi-menu-icon" onClick={() => setIsMenuOpen(true)}>☰</button>
            </div>

            <h1 className="mi-title">내 정보</h1>

            <div className="mi-profile">
                <img src={profileIcon} alt="프로필" className="mi-profile-avatar" />
                <div className="mi-profile-text">
                    <p className="mi-profile-name">김패스</p>
                    <p className="mi-profile-email">medipass@gmail.com</p>
                </div>
            </div>

            <div className="mi-info-box">
                <div className="mi-info-list">
                    <div className="mi-info-row mi-row-1">
                        <span className="mi-info-label">닉네임</span>
                        <span className="mi-info-value">김패스</span>
                        <button className="mi-edit-btn">편집</button>
                    </div>

                    <div className="mi-info-row mi-row-2">
                        <span className="mi-info-label">알레르기 정보</span>
                        <span className="mi-info-value">페니실린 알레르기</span>
                        <button className="mi-edit-btn">편집</button>
                    </div>

                    <div className="mi-info-row mi-row-3">
                        <span className="mi-info-label">복용 중인 약</span>
                        <span className="mi-info-value">고혈압약(암로디핀)</span>
                        <button className="mi-edit-btn">편집</button>
                    </div>

                    <div className="mi-info-row mi-row-4">
                        <span className="mi-info-label">기타 주의 사항</span>
                        <span className="mi-info-value">임산부 아님 / 비흡연 / 음주 안함</span>
                        <button className="mi-edit-btn">편집</button>
                    </div>
                </div>
            </div>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
}

export default MyInfoPage;