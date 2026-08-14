import backIcon from '../../assets/backIcon.svg';
import medIcon from '../../assets/medIcon.svg';
import './productDetail.css';

const productInfo = [
    { label: '제품명', value: 'tylenol Extra Strength 500mg' },
    { label: '핵심 성분', value: 'Acetaminophen 500mg' },
    { label: '제형', value: '정제 (Tablet)' },
    { label: '효능', value: '통증 완화 · 해열' },
    { label: '사용 연령', value: '12세 이상' },
];

function ProductDetailPage() {
    return (
        <div className="pd-page">
            <div className="pd-back-wrapper">
                <button className="pd-back-btn">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
            </div>

            <div className="pd-header">
                <img src={medIcon} alt="약품 아이콘" className="pd-header-icon" />
                <div className="pd-header-text">
                    <p className="pd-header-badge">미국 일반의약품</p>
                    <h1>Tylenol Extra Strength 500mg</h1>
                </div>
            </div>

            <div className="pd-info-box">
                <div className="pd-info-list">
                    {productInfo.map((item) => (
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

            <button className="pd-compare-btn">내 복용 약과 비교하기</button>
        </div>
    );
}

export default ProductDetailPage;