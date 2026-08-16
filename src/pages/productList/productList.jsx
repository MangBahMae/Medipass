import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import medIcon from '../../assets/medIcon.svg';
import './productList.css';

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

function ProductListPage({ symptom = '두통' }) {
    const navigate = useNavigate();

    const handleSelect = (id) => {
        navigate(`/product-detail/${id}`, { state: { from: 'productList' } });
    };

    return (
        <div className="pl-page">
            <div className="pl-back-wrapper">
                <button className="pl-back-btn">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
                <span className="pl-badge">미국.일반약품</span>
            </div>

            <div className="pl-title-section">
                <h1>"{symptom}"에 사용되는 제품 후보</h1>
                <p>공식 제품 설명에서 해당 증상에 사용된다고 적힌 일반의약품 후보예요.</p>
            </div>

            <div className="pl-list-wrapper">
                <div className="pl-list">
                    {medications.map((med) => (
                        <div className="pl-card" key={med.id}>
                            <img src={medIcon} alt="약품 아이콘" className="pl-card-icon" />

                            <div className="pl-card-right">
                                <div className="pl-card-text">
                                    <h3>{med.name}</h3>
                                    <p>핵심 성분: {med.ingredient}</p>
                                    <p className="pl-card-usage">{med.usage}</p>
                                </div>
                                <button className="pl-select-btn" onClick={() => handleSelect(med.id)}>
                                    선택
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pl-notice-box">
                제품 후보는 "추천"이 아니라, 입력한 약 또는 증상과 연결해 확인할 수 있는 정보예요.
            </div>
        </div>
    );
}

export default ProductListPage;