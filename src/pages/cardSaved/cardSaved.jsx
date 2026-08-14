import checkIcon from '../../assets/checkIcon.svg';
import './cardSaved.css';

function CardSavedPage() {
    return (
        <div className="cs-page">
            <img src={checkIcon} alt="저장 완료" className="cs-check-icon" />

            <h1 className="cs-title">카드가 저장됐어요</h1>
            <p className="cs-desc">
                내 약사카드함에서 언제든<br />
                다시 꺼내 보여줄 수 있어요.
            </p>

            <div className="cs-preview-card">
                <p className="cs-preview-meta">🇺🇸 영어 · 2026.08.12</p>
                <p className="cs-preview-text">
                    Is Tylenol Extra Strength safe to take with my blood pressure medication...
                </p>
            </div>

            <button className="cs-btn-primary">내 카드함 보기</button>
        </div>
    );
}

export default CardSavedPage;