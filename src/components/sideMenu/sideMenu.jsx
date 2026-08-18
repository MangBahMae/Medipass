import { useNavigate } from 'react-router-dom';
import BrandMark from '../../assets/BrandMark.svg';
import './SideMenu.css';

function SideMenu({ isOpen, onClose }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleMyInfo = () => {
        onClose();
        navigate('/my-info');
    };

    const handleMyPharmacistCard = () => {
        onClose();
        navigate('/my-pharmacist-card');
    };

    const handleLogout = () => {
        // TODO: 백엔드 연동 시 여기서 로그아웃 처리(토큰 삭제 등) 추가
        onClose();
        navigate('/login');
    };

    return (
        <div className="side-menu-overlay" onClick={onClose}>
            <div className="side-menu-panel" onClick={(e) => e.stopPropagation()}>
                <div className="side-menu-header">
                    <img src={BrandMark} alt="약쏙 로고" className="side-menu-logo-img" />
                    <button className="side-menu-close" onClick={onClose}>✕</button>
                </div>

                <nav className="side-menu-list">
                    <button className="side-menu-item" onClick={handleMyInfo}>내 정보</button>
                    <button className="side-menu-item" onClick={handleMyPharmacistCard}>내 약사카드</button>
                    <button className="side-menu-item side-menu-item--disabled" disabled>알림 설정</button>
                    <button className="side-menu-item" onClick={handleLogout}>로그아웃</button>
                </nav>
            </div>
        </div>
    );
}

export default SideMenu;