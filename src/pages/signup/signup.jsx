import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import './signup.css';

function SignupPage() {
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // TODO: 백엔드 연동 시 여기서 회원가입 API 호출 후 성공 시 navigate
        navigate('/login');
    };

    return (
        <div className="signup-page">
            <div className="signup-back-Button-wrapper">
                <button className="signup-back-Button">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
            </div>

            <div className="signup-title-section">
                <h1>회원가입</h1>
                <p>
                    복약 정보를 저장하고 다음 검색에서<br />
                    다시 사용할 수 있어요!
                </p>
            </div>

            <form id="signup-form" className="signup-form" onSubmit={handleSignup}>
                <div className="signup-field-id">
                    <label>아이디(이메일)</label>
                    <input type="email" placeholder="example@email.com" />
                </div>

                <div className="signup-field-password">
                    <label>비밀번호</label>
                    <input type="password" placeholder="8자 이상 입력해 주세요" />
                </div>

                <div className="signup-field-password-confirm">
                    <label>비밀번호 확인</label>
                    <input type="password" placeholder="비밀번호를 다시 입력해 주세요" />
                </div>

                <div className="signup-field-nickname">
                    <label>닉네임</label>
                    <input type="text" placeholder="닉네임을 입력해 주세요" />
                </div>

                <div className="signup-agreement">
                    <span
                        className={`signup-agreement-checkbox ${agreed ? 'signup-agreement-checkbox--checked' : ''}`}
                        onClick={() => setAgreed(!agreed)}
                    ></span>
                    <span className="signup-agreement-text">서비스 이용약관 및 개인정보 처리 안내에 동의합니다.</span>
                </div>
            </form>

            <div className="signup-bottom-actions">
                <button type="submit" form="signup-form" className="signup-btn-primary">회원가입</button>
            </div>
        </div>
    );
}

export default SignupPage;