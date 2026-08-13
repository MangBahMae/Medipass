import { useState } from 'react';
import backIcon from '../../assets/backIcon.svg';
import medIcon from '../../assets/medIcon.svg';  // 파일명은 실제 파일명에 맞춰서
import './result.css';

const medications = [
    {
        id: 1,
        name: 'Tylenol Extra Strength 500mg',
        ingredient: 'Acetaminophen 500mg',
        usage: '통증 완화 · 해열',
    },
    {
        id: 2,
        name: 'Tylenol Regular Strength 325mg',
        ingredient: 'Acetaminophen 325mg',
        usage: '통증 완화 · 해열',
    },
    {
        id: 3,
        name: "Children's Tylenol 160mg/5mL",
        ingredient: 'Acetaminophen 160mg/5mL',
        usage: '통증 완화 · 해열',
    },
];

function ResultPage() {
    return (
        <div className="result-page">
            <div className="result-back-wrapper">
                <button className="result-back-btn">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
                <span className="result-badge">미국.일반약품</span>
            </div>

            <div className="result-title-section">
                <h1>미국 제품 검색 결과</h1>
                <p>입력한 제품명과 연결되는 미국 일반의약품 정보를 보여줘요.</p>
            </div>

            <div className="result-list-wrapper">
                <div className="result-list">
                    {medications.map((med) => (
                        <div className="result-card">
                            <img src={medIcon} alt="약품 아이콘" className="result-card-icon" />

                            <div className="result-card-right">           {/* 오른쪽 전체 컨테이너 */}
                                <div className="result-card-text">           {/* 140×77 허그 */}
                                    <h3>{med.name}</h3>
                                    <p>핵심 성분: {med.ingredient}</p>
                                    <p className="result-card-usage">{med.usage}</p>
                                </div>
                                <button className="result-select-btn">선택</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="result-notice">
                <p className="result-notice-title">Notice</p>
                <div className="result-notice-box">
                    제품 후보는 "추천"이 아니라, 입력한 약 또는 증상과 연결해 확인할 수 있는 정보에요.
                </div>
            </div>
        </div>
    );
}

export default ResultPage;