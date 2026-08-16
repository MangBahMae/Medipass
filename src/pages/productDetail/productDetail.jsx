import { useParams, useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import medIcon from '../../assets/medIcon.svg';
import './productDetail.css';

// TODO: 백엔드 연동 시 이 배열 대신 id로 API 호출해서 받아오기
const productData = [
    {
        id: 1,
        name: 'Tylenol Extra Strength 500mg',
        info: [
            { label: '제품명', value: 'tylenol Extra Strength 500mg' },
            { label: '핵심 성분', value: 'Acetaminophen 500mg' },
            { label: '제형', value: '정제 (Tablet)' },
            { label: '효능', value: '통증 완화 · 해열' },
            { label: '사용 연령', value: '12세 이상' },
        ],
    },
    {
        id: 2,
        name: 'Tylenol Regular Strength 325mg',
        info: [
            { label: '제품명', value: 'Tylenol Regular Strength 325mg' },
            { label: '핵심 성분', value: 'Acetaminophen 325mg' },
            { label: '제형', value: '정제 (Tablet)' },
            { label: '효능', value: '통증 완화 · 해열' },
            { label: '사용 연령', value: '12세 이상' },
        ],
    },
    {
        id: 3,
        name: "Children's Tylenol 160mg/5mL",
        info: [
            { label: '제품명', value: "Children's Tylenol 160mg/5mL" },
            { label: '핵심 성분', value: 'Acetaminophen 160mg/5mL' },
            { label: '제형', value: '시럽 (Liquid)' },
            { label: '효능', value: '통증 완화 · 해열' },
            { label: '사용 연령', value: '2세 이상' },
        ],
    },
];

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || 'result';

    const product = productData.find((item) => item.id === Number(id));

    const handleCompare = () => {
        navigate(`/compare-result/${id}`, { state: { from } });
    };

    if (!product) {
        return (
            <div className="pd-page">
                <div className="pd-back-wrapper">
                    <button className="pd-back-btn" onClick={() => navigate(-1)}>
                        <img src={backIcon} alt="뒤로가기" />
                    </button>
                </div>
                <p>제품 정보를 찾을 수 없어요.</p>
            </div>
        );
    }

    return (
        <div className="pd-page">
            <div className="pd-back-wrapper">
                <button className="pd-back-btn" onClick={() => navigate(-1)}>
                    <img src={backIcon} alt="뒤로가기" />
                </button>
            </div>

            <div className="pd-header">
                <img src={medIcon} alt="약품 아이콘" className="pd-header-icon" />
                <div className="pd-header-text">
                    <p className="pd-header-badge">미국 일반의약품</p>
                    <h1>{product.name}</h1>
                </div>
            </div>

            <div className="pd-info-box">
                <div className="pd-info-list">
                    {product.info.map((item) => (
                        <div className="pd-info-row" key={item.label}>
                            <span className="pd-info-label">{item.label}</span>
                            <span className="pd-info-value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pd-notice-box">
                제품 설명은 현재 데모 데이터에 포함된 범위에서만 표시돼요.
            </div>

            <button className="pd-compare-btn" onClick={handleCompare}>내 복용 약과 비교하기</button>
        </div>
    );
}

export default ProductDetailPage;