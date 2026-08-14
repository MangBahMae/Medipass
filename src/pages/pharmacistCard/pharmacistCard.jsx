import { useState } from 'react';
import backIcon from '../../assets/backIcon.svg';
import './pharmacistCard.css';

const languages = ['영어', '일본어', '현지어'];

function PharmacistCardPage() {
    const [selectedLang, setSelectedLang] = useState('영어');

    return (
        <div className="pc-page">
            <div className="pc-back-wrapper">
                <button className="pc-back-btn">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
            </div>

            <div className="pc-title-section">
                <h1>약사 질문 카드</h1>
                <p>현지 약사에게 화면 그대로 보여주세요.</p>
            </div>

            <div className="pc-lang-tabs">
                {languages.map((lang) => (
                    <button
                        key={lang}
                        className={`pc-lang-tab ${selectedLang === lang ? 'pc-lang-tab--active' : ''}`}
                        onClick={() => setSelectedLang(lang)}
                    >
                        {lang}
                    </button>
                ))}
            </div>

            <div className="pc-content-box">
                <div className="pc-content-title-wrapper">
                    <h3 className="pc-content-title">For the pharmacist</h3>
                </div>

                <div className="pc-content-body">
                    <p>
                        I am currently taking the medication below.<br />
                        · Tylenol 500mg
                    </p>

                    <p>
                        I have the following allergy.<br />
                        · Aspirin
                    </p>

                    <p>I currently have a headache.</p>

                    <p>
                        <span className="pc-content-subtitle">Product I would like to confirm</span><br />
                        Tylenol Regular Strength 325mg<br />
                        Acetaminophen 325mg
                    </p>

                    <p>
                        Could you please confirm whether I should avoid taking these together,
                        and whether there is another option without the same active ingredient?
                    </p>

                    <p>
                        <span className="pc-content-subtitle">Other information</span><br />
                        · Smoking<br />
                        · Occasional drinking
                    </p>
                </div>
            </div>

            <div className="pc-bottom-actions">
                <button className="pc-btn-primary">카드 저장</button>
                <button className="pc-btn-secondary">다시 번역</button>
            </div>
        </div>
    );
}

export default PharmacistCardPage;