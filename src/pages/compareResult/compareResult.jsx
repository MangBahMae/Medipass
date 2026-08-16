import { useParams, useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import './compareResult.css';

// TODO: 백엔드 연동 시 productDetail의 productData와 통합하거나 API로 대체
const productNames = {
    1: 'Tylenol Extra Strength 500mg',
    2: 'Tylenol Regular Strength 325mg',
    3: "Children's Tylenol 160mg/5mL",
};

// TODO: 팀원이 "내 복용약 선택" 화면 만들면, 거기서 선택한 약을 여기로 대체
const myMedication = '타이레놀 500mg';

function CompareResultPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || 'result';

    const usProductName = productNames[id] || 'Tylenol Regular Strength 325mg';

    const compareInfo = [
        { label: '내 약', value: myMedication },
        { label: '미국 제품', value: usProductName },
        { label: '제형', value: '정제 ↔ 정제' },
        { label: '한 번에 표시된 양', value: '500mg ↔ 500mg' },
    ];

    const handleQuestionCard = () => {
        navigate('/pharmacist-card');
    };

    const handleCompareAgain = () => {
        if (from === 'productList') {
            navigate('/product-list');
        } else {
            navigate('/result');
        }
    };

    return (
        <div className="cr-page">
            <div className="cr-back-wrapper">
                <button className="cr-back-btn" onClick={() => navigate(-1)}>
                    <img src={backIcon} alt="뒤로가기" />
                </button>
            </div>

            <h1 className="cr-title">성분 비교 결과</h1>

            <div className="cr-status-box">
                <p className="cr-status-title">✓ 상태 A. 같은 성분 발견</p>
                <p className="cr-status-desc">등록한 약과 확인 중인 미국 제품에 같은 핵심 성분이 있어요.</p>
            </div>

            <div className="cr-info-box">
                <div className="cr-info-header">
                    <p className="cr-info-header-text">
                        겹치는 핵심 성분<br />
                        <span className="cr-info-header-highlight">Acetaminophen 500mg</span>
                    </p>
                </div>

                <div className="cr-info-list">
                    {compareInfo.map((item) => (
                        <div className="cr-info-row" key={item.label}>
                            <span className="cr-info-label">{item.label}</span>
                            <span className="cr-info-value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cr-warning-box">
                같은 핵심 성분이 포함되어 있습니다. 함께 먹기 전에 약사에게 확인하세요.
            </div>

            <p className="cr-disclaimer">
                ※ 같은 성분 발견은 전체 안전을 뜻하지 않습니다. 현재 지원 범위에서 확인한 결과만 보여줍니다.
            </p>

            <div className="cr-bottom-actions">
                <button className="cr-btn-primary" onClick={handleQuestionCard}>약사 질문 카드 만들기</button>
                <button className="cr-btn-secondary" onClick={handleCompareAgain}>다른 제품 비교하기</button>
            </div>
        </div>
    );
}

export default CompareResultPage;