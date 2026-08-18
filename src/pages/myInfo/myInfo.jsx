import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import profileIcon from '../../assets/profileIcon.svg';
import SideMenu from '../../components/sideMenu/sideMenu.jsx';
import './myInfo.css';

const initialFields = [
    { key: 'nickname', label: '닉네임', value: '김패스' },
    { key: 'allergy', label: '알레르기 정보', value: '페니실린 알레르기' },
    { key: 'medication', label: '복용 중인 약', value: '고혈압약(암로디핀)' },
    { key: 'note', label: '기타 주의 사항', value: '임산부 아님 / 비흡연 / 음주 안함' },
];

function MyInfoPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [fields, setFields] = useState(initialFields);
    const [editingKey, setEditingKey] = useState(null);
    const [draftValue, setDraftValue] = useState('');
    const navigate = useNavigate();

    const handleEditStart = (field) => {
        setEditingKey(field.key);
        setDraftValue(field.value);
    };

    const handleSave = (key) => {
        // TODO: 백엔드 연동 시 여기서 PATCH/PUT API 호출해서 서버에 반영
        setFields((prev) =>
            prev.map((f) => (f.key === key ? { ...f, value: draftValue } : f))
        );
        setEditingKey(null);
    };

    return (
        <div className="mi-page">
            <div className="mi-top-wrapper">
                <button className="mi-back-btn" onClick={() => navigate(-1)}>
                    <img src={backIcon} alt="뒤로가기" />
                </button>
                <button className="mi-menu-icon" onClick={() => setIsMenuOpen(true)}>☰</button>
            </div>

            <h1 className="mi-title">내 정보</h1>

            <div className="mi-profile">
                <img src={profileIcon} alt="프로필" className="mi-profile-avatar" />
                <div className="mi-profile-text">
                    <p className="mi-profile-name">김패스</p>
                    <p className="mi-profile-email">medipass@gmail.com</p>
                </div>
            </div>

            <div className="mi-info-box">
                <div className="mi-info-list">
                    {fields.map((field, idx) => {
                        const isEditing = editingKey === field.key;
                        return (
                            <div className={`mi-info-row mi-row-${idx + 1}`} key={field.key}>
                                <span className="mi-info-label">{field.label}</span>

                                {isEditing ? (
                                    <input
                                        className="mi-info-input"
                                        value={draftValue}
                                        onChange={(e) => setDraftValue(e.target.value)}
                                        autoFocus
                                    />
                                ) : (
                                    <span className="mi-info-value">{field.value}</span>
                                )}

                                {isEditing ? (
                                    <button className="mi-edit-btn" onClick={() => handleSave(field.key)}>
                                        저장
                                    </button>
                                ) : (
                                    <button className="mi-edit-btn" onClick={() => handleEditStart(field)}>
                                        편집
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
}

export default MyInfoPage;