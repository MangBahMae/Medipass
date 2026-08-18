import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import './pharmacistCard.css';

const languages = ['영어', '일본어', '현지어'];

// TODO: 백엔드 연동 시 이 목데이터 대신 실제 질문 내용을 받아서 각 언어로 번역 API 호출
const cardContent = {
    영어: {
        title: 'For the pharmacist',
        medication: {
            label: 'I am currently taking the medication below.',
            value: '· Tylenol 500mg',
        },
        allergy: {
            label: 'I have the following allergy.',
            value: '· Aspirin',
        },
        symptom: 'I currently have a headache.',
        productLabel: 'Product I would like to confirm',
        productName: 'Tylenol Regular Strength 325mg',
        productIngredient: 'Acetaminophen 325mg',
        question:
            'Could you please confirm whether I should avoid taking these together, and whether there is another option without the same active ingredient?',
        otherLabel: 'Other information',
        other: ['· Smoking', '· Occasional drinking'],
    },
    일본어: {
        title: '薬剤師の方へ',
        medication: {
            label: '現在、以下の薬を服用しています。',
            value: '・タイレノール 500mg',
        },
        allergy: {
            label: '以下のアレルギーがあります。',
            value: '・アスピリン',
        },
        symptom: '現在、頭痛があります。',
        productLabel: '確認したい製品',
        productName: 'タイレノール レギュラー ストレングス 325mg',
        productIngredient: 'アセトアミノフェン 325mg',
        question:
            'これらを一緒に服用しても大丈夫か、また同じ有効成分を含まない他の選択肢があるかご確認いただけますか？',
        otherLabel: 'その他の情報',
        other: ['・喫煙あり', '・時々飲酒'],
    },
    현지어: {
        title: 'Para el farmacéutico',
        medication: {
            label: 'Actualmente estoy tomando el siguiente medicamento.',
            value: '· Tylenol 500mg',
        },
        allergy: {
            label: 'Tengo la siguiente alergia.',
            value: '· Aspirina',
        },
        symptom: 'Actualmente tengo dolor de cabeza.',
        productLabel: 'Producto que me gustaría confirmar',
        productName: 'Tylenol Regular Strength 325mg',
        productIngredient: 'Acetaminofén 325mg',
        question:
            '¿Podría confirmar si debo evitar tomar estos juntos, y si existe otra opción sin el mismo ingrediente activo?',
        otherLabel: 'Otra información',
        other: ['· Fumador', '· Bebe ocasionalmente'],
    },
};

function PharmacistCardPage() {
    const [selectedLang, setSelectedLang] = useState('영어');
    const navigate = useNavigate();
    const content = cardContent[selectedLang];

    const handleSave = () => {
        navigate('/card-saved');
    };

    const handleRetranslate = () => {
        // TODO: 백엔드/번역 API 연동 시 여기서 selectedLang 기준으로 재요청
        // 지금은 더미 데이터라 selectedLang 클릭만으로 이미 반영되지만,
        // 실제 API 붙이면 이 버튼에서 로딩 상태 처리 + fetch 호출 예정
        console.log(`${selectedLang}로 다시 번역 요청`);
    };

    return (
        <div className="pc-page">
            <div className="pc-back-wrapper">
                <button className="pc-back-btn" onClick={() => navigate(-1)}>
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
                    <h3 className="pc-content-title">{content.title}</h3>
                </div>

                <div className="pc-content-body">
                    <p>
                        {content.medication.label}<br />
                        {content.medication.value}
                    </p>

                    <p>
                        {content.allergy.label}<br />
                        {content.allergy.value}
                    </p>

                    <p>{content.symptom}</p>

                    <p>
                        <span className="pc-content-subtitle">{content.productLabel}</span><br />
                        {content.productName}<br />
                        {content.productIngredient}
                    </p>

                    <p>{content.question}</p>

                    <p>
                        <span className="pc-content-subtitle">{content.otherLabel}</span><br />
                        {content.other.map((line, idx) => (
                            <span key={idx}>
                                {line}
                                {idx < content.other.length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <div className="pc-bottom-actions">
                <button className="pc-btn-primary" onClick={handleSave}>카드 저장</button>
                <button className="pc-btn-secondary" onClick={handleRetranslate}>다시 번역</button>
            </div>
        </div>
    );
}

export default PharmacistCardPage;