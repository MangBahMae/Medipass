import backIcon from '../../assets/backIcon.svg';
import './compareResult.css';

const compareInfo = [
    { label: '내 약', value: '타이레놀 500mg' },
    { label: '미국 제품', value: 'Tylenol Regular Strength 325mg' },
    { label: '제형', value: '정제 ↔ 정제' },
    { label: '한 번에 표시된 양', value: '500mg ↔ 500mg' },
];

function CompareResultPage() {
    return (
        <div className="cr-page">
            <div className="cr-back-wrapper">
                <button className="cr-back-btn">
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
                <button className="cr-btn-primary">약사 질문 카드 만들기</button>
                <button className="cr-btn-secondary">다른 제품 비교하기</button>
            </div>
        </div>
    );
}

export default CompareResultPage;