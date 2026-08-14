import './SideMenu.css';

function SideMenu({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="side-menu-overlay" onClick={onClose}>
            <div className="side-menu-panel" onClick={(e) => e.stopPropagation()}>
                <div className="side-menu-header">
                    <span className="side-menu-logo-icon">+</span>
                    <button className="side-menu-close" onClick={onClose}>✕</button>
                </div>

                <nav className="side-menu-list">
                    <button className="side-menu-item">내 정보</button>
                    <button className="side-menu-item">내 약사카드</button>
                    <button className="side-menu-item">알림 설정</button>
                    <button className="side-menu-item">로그아웃</button>
                </nav>
            </div>
        </div>
    );
}

export default SideMenu;